import { useFrame } from "@react-three/fiber/native";
import { Suspense, useRef } from "react";
import { R3fObject } from "../../types/r3fObject";
import { IceCreamModel } from "./model";

export function R3fObjectListItem({ r3fObject }: { r3fObject: R3fObject }) {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y += 0.005;
      ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      ref.current.rotation.x = Math.cos(t / 4) / 8;
      // ref.current.rotation.y = Math.sin(t / 4) / 8;
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  return (
    <group ref={ref}>
      <Suspense
        fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#fff"} />
          </mesh>
        }
      >
        {r3fObject.type === "box" ? (
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#72A8A5"} />
          </mesh>
        ) : (
          <IceCreamModel />
        )}
      </Suspense>
    </group>
  );
}

// interface R3fObjectListItemBoxProps extends MeshProps {}
// function R3fObjectListItemBox({ ...props }: R3fObjectListItemBoxProps) {
//   return (
//     <mesh {...props}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"#72A8A5"} />
//     </mesh>
//   );
// }

// interface R3fObjectListItemModelProps extends MeshProps {}
// function R3fObjectListItemModel({ ...props }: R3fObjectListItemModelProps) {
//   return (
//     <mesh {...props}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"#333"} />
//     </mesh>
//   );
// }
