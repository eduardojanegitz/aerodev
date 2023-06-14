import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
export const TextSection = ({ title, subtitle, alternative, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY={"bottom"}
          lineHeight={4}
          fontSize={0.3}
          maxWidth={3.5}
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
        position-y={-0.3}
        fontSize={0.15}
        maxWidth={3.1}
        font={"./fonts/Poppins-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial 
        color={"white"}
        onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      <Text
        color="white"
        anchorX={"left"}
        anchorY={"middle"}
        position-y={0.3}
        fontSize={0.3}
        maxWidth={4}
        font={"./fonts/Poppins-Bold.ttf"}
      >
        {alternative}
        <meshStandardMaterial 
        color={"white"}
        onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
