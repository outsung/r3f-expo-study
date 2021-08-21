import React, { useRef, useState, Suspense, useMemo } from 'react';
import * as Three from 'three';
import { Alert, View } from 'react-native';

import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber';
import { Asset } from 'expo-asset';
import * as ExpoTHREE from 'expo-three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import usePromise from 'react-promise-suspense';

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// extend({ OrbitControls });

import Controls from './Controls';
import { SlerpOfAccelerometer, SlerpOfMouse } from './Slerps';
import { Text } from '../Texts';
import colors from '../../../constants/color';

const MODEL_PATH = '../../../../assets/models/lantern.glb';

interface Test3DScreenProps {
  z: number;
}
function Test3DScreen({ z }: Test3DScreenProps) {
  const { viewport } = useThree();

  // colors.gray
  // colors.mainColor

  const cameraZ = -5;

  const depth = useMemo(() => {
    // camera z = 5;
    return z;
  }, []);

  const angle90 = Math.PI / 2;

  const wallSize = useMemo(() => Math.max(viewport.height, viewport.width), [viewport]);
  const wallZ = useMemo(() => wallSize / 2 + depth, [wallSize, depth]);

  const color = colors.mainColor;

  return (
    <>
      {/* floor */}
      <mesh position={[0, 0, depth]}>
        <boxBufferGeometry args={[viewport.width, viewport.height, 0.1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>

      {/* right */}
      <mesh rotation={[0, angle90, 0]} position={[-(viewport.width + 6) / 2, 0, wallZ]}>
        <boxBufferGeometry args={[wallSize, viewport.height + 6, 0.1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
      {/* left */}
      <mesh rotation={[0, angle90, 0]} position={[(viewport.width + 6) / 2, 0, wallZ]}>
        <boxBufferGeometry args={[wallSize, viewport.height + 6, 0.1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
      {/* top */}
      <mesh rotation={[angle90, 0, 0]} position={[0, -(viewport.height + 6) / 2, wallZ]}>
        <boxBufferGeometry args={[viewport.width + 6, wallSize, 0.1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
      {/* bottom */}
      <mesh rotation={[angle90, 0, 0]} position={[0, (viewport.height + 6) / 2, wallZ]}>
        <boxBufferGeometry args={[viewport.width + 6, wallSize, 0.1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
    </>
  );
}

function TestCube() {
  const meshRef = useRef<Three.Mesh>(null);
  const { viewport } = useThree();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame(() => {
  // if (meshRef.current) {
  // meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  // console.log(meshRef.current.rotation.y + 0.01);
  // }
  // });
  return (
    <mesh
      ref={meshRef}
      scale={active ? [viewport.width, viewport.height, 2] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[]} />
      <meshPhysicalMaterial color={hovered ? colors.mainColor : colors.black} />
    </mesh>
  );
}

function TestLantern() {
  const res = usePromise(async () => {
    const asset = Asset.fromModule(require(MODEL_PATH));
    await asset.downloadAsync();

    // const loader = new GLTFLoader();
    const load = await ExpoTHREE.loadAsync(asset.uri);
    return load;
    // return asset.localUri ? loader.loadAsync(asset.uri) : null;
  }, []);

  // const copiedScene = useMemo(() => res.scene.clone(), [res.scene]);

  console.log(Object.keys(res.scene));

  return res.scene ? (
    <group scale={[0.001, 0.001, 0.001]}>
      {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
      <primitive object={res.scene} />
    </group>
  ) : null;
}

// const Controls = (props: any) => {
//   const { gl, camera } = useThree();
//   return <orbitControls args={[camera, gl.domElement]} {...props} />;
// };

export function Glb() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SlerpOfAccelerometer position={[0, 0, 0]}>
        <Test3DScreen z={-1} />
        <Suspense fallback={<TestCube />}>{<TestLantern />}</Suspense>
        {/* <TestCube /> */}
        {/* <TestLantern /> */}
      </SlerpOfAccelerometer>
      {/* <SlerpOfMouse position={[0, 0, 0]}>
      </SlerpOfMouse> */}
      {/* <Controls /> */}
    </Canvas>
  );
}
