import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import styled from "styled-components";

const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return <InputStyled {...field} />;
};

export default Input;

const InputStyled = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 10px;
`;
