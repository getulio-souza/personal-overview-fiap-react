import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Por favor, digite um e-mail válido").required("Required"),
  option: yup.string().required("Por favor, selecione uma opção")
});