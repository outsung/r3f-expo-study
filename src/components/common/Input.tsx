import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}
export function Input({ ...props }: InputProps) {
  return (
    <TextInput
      {...props}
      style={[
        {
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderColor: "#333",
          borderWidth: 1,
          borderRadius: 5,
        },
        props.style,
      ]}
    />
  );
}
