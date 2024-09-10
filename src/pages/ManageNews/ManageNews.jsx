import { useForm } from "react-hook-form";
import { createNews } from "../../services/newsServices";
import { AddNewsContainer } from "./ManageNewsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchema";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export function ManageNews() {
  const { action } = useParams();
  const navigate = useNavigate();

  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
    setValue,
  } = useForm({ resolver: zodResolver(newsSchema) });

  async function registerNewsSubmit(data) {
    try {
        await createNews(data);
        navigate("/profile");
    } catch (error) {
        console.log(error);
    }
  }

  async function editNewsSubmit(data) {}

  return (
    <AddNewsContainer>
      <h2>{action == "add" ? "Adicionar" : "Atualizar"} </h2>
      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : handleRegisterNews(editNewsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Titulo"
          name="title"
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.title && (
          <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Link da imagem"
          name="banner"
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.banner && (
          <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Texto"
          name="text"
          register={registerNews}
          isInput={false}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.text && (
          <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
        )}

        <Button
          type="submit"
          text={
            action === "add"
              ? "Adicionar"
              : action === "edit"
              ? "Atualizar"
              : "Apagar"
          }
        />
      </form>
    </AddNewsContainer>
  );
}
