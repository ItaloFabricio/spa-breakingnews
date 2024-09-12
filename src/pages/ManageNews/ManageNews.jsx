import { useForm } from "react-hook-form";
import {
  createNews,
  deleteNews,
  editNews,
  getNewsById,
} from "../../services/newsServices";
import { AddNewsContainer } from "./ManageNewsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchema";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useEffect } from "react";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";

export function ManageNews() {
  const { action, id } = useParams();
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
      console.log("Dados:", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function editNewsSubmit(data) {
    try {
      await editNews(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function findNewsById(id) {
    try {
      const { data } = await getNewsById(id);
      console.log(data);
      setValue("title", data.news.title);
      setValue("banner", data.news.banner);
      setValue("text", data.news.text);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNewsSubmit() {
    try {
      await deleteNews(id);
      navigate("/profile")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (action === "edit" || action === "delete") {
      findNewsById(id);
    }
  }, []);

  return (
    <AddNewsContainer>
      <h2>
        {action === "add"
          ? "Adicionar"
          : action === "edit"
          ? "Atualizar"
          : "Apagar"}{" "}
        Notícia
      </h2>
      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : action === "edit"
            ? handleRegisterNews(editNewsSubmit)
            : handleRegisterNews(deleteNewsSubmit)
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
