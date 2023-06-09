import { Text } from "@react-three/drei";
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
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY={"middle"}
        position-y={-0.50}
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Poppins-Regular.ttf"}
      >
        {subtitle}
      </Text>
    </group>
  );
};
