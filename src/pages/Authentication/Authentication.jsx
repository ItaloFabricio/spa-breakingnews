import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
import { Button } from "../../components/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { signin, signup } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function Authentication() {
  const {
    register: registerSignin,
    handleSubmit: handlerSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const {
    register: registerSignup,
    handleSubmit: handlerSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  const navigate = useNavigate();

  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  return (
    <AuthContainer>
      <div>
        {!Cookies.get("token") ? (
          <Section type="signin">
            <h2>Entrar</h2>
            <form onSubmit={handlerSubmitSignin(inHandleSubmit)}>
              <Input
                register={registerSignin}
                type="email"
                placeholder="E-mail"
                name="email"
                //register={inRegister}
              />
              {errorsSignin.email && (
                <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
              )}
              <Input
                register={registerSignin}
                type="password"
                placeholder="Senha"
                name="password"
                //register={inRegister}
              />
              {errorsSignin.password && (
                <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
              )}
              <Button type="submit" text="Entrar" />
            </form>
          </Section>
        ) : (
          <p>Vc ja esta logado</p>
        )}
      </div>

      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handlerSubmitSignup(upHandleSubmit)}>
          <Input
            register={registerSignup}
            type="text"
            placeholder="Nome"
            name="name"
            //register={inRegister}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}
          <Input
            register={registerSignup}
            type="email"
            placeholder="Email"
            name="email"
            //register={inRegister}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}
          <Input
            register={registerSignup}
            type="password"
            placeholder="Senha"
            name="password"
            //register={inRegister}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
          )}
          <Input
            register={registerSignup}
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            //register={inRegister}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
          )}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}
