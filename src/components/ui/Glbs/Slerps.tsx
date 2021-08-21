import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from 'react-three-fiber';
import { useCallback } from 'react';
import useAccelerometer from './useAccelerometer';

type slerpProps = {
  position?: [number, number, number];
  children: React.ReactNode;
};

export function SlerpOfMouse({ position = [0, 0, 0], children }: slerpProps) {
  const group = useRef<THREE.Group>();
  const { viewport } = useThree();

  const [rotationEuler, rotationQuaternion] = useMemo(
    () => [new THREE.Euler(0, 0, 0), new THREE.Quaternion(0, 0, 0, 0)],
    [],
  );

  useFrame(({ mouse }) => {
    if (!group.current) return;

    const x = (mouse.x * viewport.width) / viewport.width;
    const y = -(mouse.y * viewport.height) / viewport.height;

    // console.log(y, x, viewport.width, viewport.height);

    rotationEuler.set(y, x, 0);
    rotationQuaternion.setFromEuler(rotationEuler);

    console.log(rotationQuaternion);
    group.current.quaternion.slerp(rotationQuaternion, 0.1);
  });

  return (
    <group position={position} ref={group}>
      {children}
    </group>
  );
}

export function SlerpOfAccelerometer({ position = [0, 0, 0], children }: slerpProps) {
  const group = useRef<THREE.Group>();

  const [rotationEuler, rotationQuaternion] = useMemo(
    () => [new THREE.Euler(0, 0, 0), new THREE.Quaternion(0, 0, 0, 0)],
    [],
  );
  const accelerometer = useAccelerometer();
  useFrame(
    useCallback(() => {
      if (!group.current) return;

      rotationEuler.set((accelerometer.y * Math.PI) / 2, (accelerometer.x * Math.PI) / 2, 0);
      rotationQuaternion.setFromEuler(rotationEuler);
      group.current.quaternion.slerp(rotationQuaternion, 0.1);
    }, [accelerometer]),
  );

  return (
    <group position={position} ref={group}>
      {children}
    </group>
  );
}
