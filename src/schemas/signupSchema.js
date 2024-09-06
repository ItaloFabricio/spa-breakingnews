import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .transform((name) =>
      name
        .trim() //remove os espaços em branco do início e do final da string
        .split(" ") //divide a string em um array de palavras
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
  confirmPassword: z
    .string()
    .min(6, "A senha preciso ter no mínimo 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
});
