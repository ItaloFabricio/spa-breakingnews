import { useNavigate, useParams } from "react-router-dom";
import { EditUserContainer } from "./ManageUserStyled";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { editUser, getUserById } from "../../services/userServices";
import { useForm } from "react-hook-form";
import { userSchema } from "../../schemas/userSchema";
import { useEffect } from "react";

export function ManageUser() {
  const { action, id } = useParams();
  const navigate = useNavigate();

  const {
    register: registerUser,
    handleSubmit: handleRegisterUser,
    formState: { errors: errorsRegisterUser },
    setValue,
  } = useForm({ resolver: zodResolver(userSchema) });

  async function findUserById(id) {
    try {
      const { data } = await getUserById(id);
      console.log(data);
      setValue("avatar", data.avatar);
      setValue("name", data.name);
      setValue("username", data.username);
    } catch (error) {
      console.log(error);
    }
  }

  async function editUserSubmit(data) {
    try {
      await editUser(id, data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (action === "edit") {
      findUserById(id);
    }
  });

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
      </form>
    </EditUserContainer>
  );
}
