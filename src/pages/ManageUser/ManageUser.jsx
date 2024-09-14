import { useNavigate, useParams } from "react-router-dom";
import { EditUserContainer } from "./ManageUserStyled";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { editUser, userLogged } from "../../services/userServices";
import { useForm } from "react-hook-form";
import { userSchema } from "../../schemas/userSchema";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { UserContext } from "../../Context/UserContext";

export function ManageUser() {
  const { action, id } = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  // Obter a função setUser do contexto para atualizar o usuário após a edição
  const { user, setUser } = useContext(UserContext);

  const {
    register: registerUser,
    handleSubmit: handleRegisterUser,
    formState: { errors: errorsRegisterUser },
    setValue,
  } = useForm({ resolver: zodResolver(userSchema) });

  async function findUserById() {
    try {
      const { data } = await userLogged();
      console.log(data);
      setValue("avatar", data.avatar);
      setValue("name", data.name);
      setValue("username", data.username);
    } catch (error) {
      console.log(error);
    }
  }

  async function editUserSubmit(body) {
    console.log("Dados enviados: ", body);

    // Verifica se o ID está presente e é válido
    if (!id) {
      console.error("ID de usuário não fornecido.");
      return;
    }

    try {
      // Chama a função editUser passando o ID e o body
      const data = await editUser(id, body);
      console.log(data);
      setUser(data.data);
      navigate("/profile"); // Redireciona para o perfil após a atualização
    } catch (error) {
      console.error(
        "Erro ao editar o usuário:",
        error.response ? error.response.data : error.message
      );
    }
      console.log("🚀 ~ editUserSubmit ~ data:", data)
  }

  useEffect(() => {
    if (action === "edit") {
      findUserById();
    }
  }, []);

  return (
    <EditUserContainer>
      <h2>{action == "edit" ? "Editar" : "Deletar"}</h2>
      <form onSubmit={handleRegisterUser(editUserSubmit)}>
        <Input
          type="text"
          placeholder="Avatar"
          name="avatar"
          register={registerUser}
          disabled={action === "delete"}
        />
        {errorsRegisterUser.avatar && (
          <ErrorSpan>{errorsRegisterUser.avatar.message}</ErrorSpan>
        )}

        <Input
          type="text"
          placeholder="Nome"
          name="name"
          register={registerUser}
          disabled={action === "delete"}
        />
        {errorsRegisterUser.name && (
          <ErrorSpan>{errorsRegisterUser.name.message}</ErrorSpan>
        )}

        <Input
          type="text"
          placeholder="Username"
          name="username"
          register={registerUser}
          disabled={action === "delete"}
        />
        {errorsRegisterUser.username && (
          <ErrorSpan>{errorsRegisterUser.username.message}</ErrorSpan>
        )}

        <Button
          type="submit"
          text={action === "edit" ? "Atualizar" : "Apagar"}
        />
      </form>
    </EditUserContainer>
  );
}
