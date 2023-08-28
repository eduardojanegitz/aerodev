import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
export const TextSection = ({ content, ...props }) => {
  return (
    <group {...props}>
      {!!content && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY={"middle"}
          position-y={-0.1}
          fontSize={0.2}
          maxWidth={3}
          font={"./fonts/Poppins-Bold.ttf"}
        >
          {content}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}
    </group>
  );
};
