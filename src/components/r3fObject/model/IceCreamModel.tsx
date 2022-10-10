import usePromise from "react-promise-suspense";
import { Asset } from "expo-asset";
import * as ExpoTHREE from "expo-three";
import { GroupProps } from "@react-three/fiber/native";

const MODEL_PATH = "../../../assets/model/iceCreamModel.glb";

export function IceCreamModel(props: GroupProps) {
  const res = usePromise(async () => {
    const asset = Asset.fromModule(require(MODEL_PATH));
    await asset.downloadAsync();

    const load = await ExpoTHREE.loadAsync(asset.uri);
    return load;
  }, []);

  return res.scene ? (
    <group {...props} scale={5}>
      <primitive object={res.scene} />
    </group>
  ) : null;
}
