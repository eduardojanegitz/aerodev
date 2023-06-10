import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY={"bottom"}
          lineHeight={1}
          fontSize={0.52}
          maxWidth={2.5}
          font={"./fonts/Poppins-Bold.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY={"middle"}
        position-y={-0.5}
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Poppins-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial 
        color={"white"}
        onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
