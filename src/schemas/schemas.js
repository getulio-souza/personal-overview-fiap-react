import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Por favor, digite um e-mail válido").required("Required"),
});