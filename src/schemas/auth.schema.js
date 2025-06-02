import { z } from "zod"; //módulo que permite validar registro y login

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es requerido",
  }),
  email: z
    .string({
      required_error: "El correo electrónico es requerido",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña tiene que ser de al menos 6 digitos",
    }),
});

export const loginSchema= z.object ({
     email: z
    .string({
      required_error: "El correo electrónico es requerido",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña tiene que ser de al menos 6 digitos",
    }),
});