import { InputSpace, TextareaSpace } from "./InputStyled";

export function Input({
  type,
  placeholder,
  register,
  name,
  isInput = true,
  value,
}) {
  let inputProps = {
    type,
    placeholder,
    ...register(name),
  };
  if (value) {
    inputProps.value = value;
  }

  return (
    <>
      {isInput ? (
        <InputSpace {...inputProps} />
      ) : (
        <TextareaSpace {...inputProps} />
      )}
    </>
  );
}
