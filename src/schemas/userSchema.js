import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "O name não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O título não pode ter apenas espaços",
    }),
  username: z
    .string()
    .nonempty({ message: "O username não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O link do banner não pode ter apenas espaços",
    }),
  avatar: z
    .string()
    .nonempty({ message: "O link do avatar não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O texto não pode ter apenas espaços",
    }),
});