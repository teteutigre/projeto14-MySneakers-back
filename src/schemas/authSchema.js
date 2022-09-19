import joi from "joi";

export const signUpSchema = joi.object({
  email: joi.string().email().required(),
  name: joi.string().required(),
  password: joi.string().min(6).required(),
  passwordConfirm: joi.string().min(6).required(),
  cep: joi
    .string()
    .length(9)
    .pattern(/^[0-9,-]+$/)
    .required(),
  numero: joi.string().min(0).max(5).required(),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});