import { InputSpace } from "./InputStyled";

export function Input({type, placeholder, register, name}) {
    return (
        <InputSpace type={type} placeholder={placeholder} /* {...register(name)} *//>
    )
}