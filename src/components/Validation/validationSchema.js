import * as yup from "yup";

export const cityValidation = yup.object().shape({
  city: yup
    .string()
    .required("City name is required")
    .matches(/^[A-Za-z]( ?[A-Za-z] ?)*$/g, "Enter valid city name"),
});
