import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export function Button({ title, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: "#1890ff",
          borderRadius: 5,
          alignItems: "center",
        },
        props.style,
      ]}
    >
      <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
