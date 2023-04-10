import Joi, { object } from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Tên không được để trống",
    "any.required": "trường tên là bắt buộc",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "email không được để trống",
    "any.required": "trường email là bắt buộc",
    "string.email": "email không đúng định dạng",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "mật khẩu không được để trống",
    "any.required": "trường mật khẩu là bắt buộc",
    "string.min": "mật khẩu phải có ít nhất {#limit} ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "trường xác nhận mật khẩu không được để trống",
    "any.required": "trường xác nhận mật khẩu là bắt buộc",
    "any.only": "trường xác nhận mật khẩu không khớp",
  }),
});

export const signinSchema = object({
  email: Joi.string().email().required().messages({
    "string.empty": "email không được để trống",
    "any.required": "trường email là bắt buộc",
    "string.email": "email không đúng định dạng",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "mật khẩu không được để trống",
    "any.required": "trường mật khẩu là bắt buộc",
    "string.min": "mật khẩu phải có ít nhất {#limit} ký tự",
  }),
});
