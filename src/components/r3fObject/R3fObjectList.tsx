import { Canvas } from "@react-three/fiber/native";
import { useEffect, useMemo, useState } from "react";
import useSocketEventOn from "../../hooks/socket/useSocketEventOn";
import { R3fObject } from "../../types/r3fObject";
import { R3fObjectListItem } from "./R3fObjectListItem";
import { R3fObjectListEmpty } from "./R3fObjectListEmpty";

export function R3fObjectList() {
  const [focusedR3fObjectId, setFocusedR3fObjectId] = useState<string | null>(
    null
  );
  const [r3fObjectList, setR3fObjectList] = useState<R3fObject[]>([]);

  useSocketEventOn("r3fObjectCreate", ({ r3fObjectId, type, groupString }) => {
    console.log("r3fObjectCreate", { r3fObjectId, type, groupString });
    setR3fObjectList((prev) =>
      prev.concat({ id: r3fObjectId, type, groupString })
    );
  });

  useSocketEventOn("r3fObjectFocus", ({ r3fObjectId }) => {
    console.log("r3fObjectFocus", { r3fObjectId });
    setFocusedR3fObjectId(r3fObjectId);
  });

  const focusedR3fObject = useMemo(() => {
    if (!r3fObjectList.length) return null;
    if (focusedR3fObjectId === null) return null;

    return (
      r3fObjectList.find((r3fObject) => r3fObject.id === focusedR3fObjectId) ||
      null
    );
  }, [r3fObjectList, focusedR3fObjectId]);

  if (focusedR3fObject === null) return <R3fObjectListEmpty />;

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, 10]} />

      <R3fObjectListItem r3fObject={focusedR3fObject} />
    </Canvas>
  );
}
