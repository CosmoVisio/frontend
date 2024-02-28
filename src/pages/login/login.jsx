import { Logo } from "@/components/Icons";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  // O email deve estar no formato email@email.com
  const emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // A senha deve ser alfanumérica, com no mínimo 8 caracteres
  // contendo 1 número, 1 lowerCase e 1 upperCase
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  const handleOnLoginButtonClick = () => {
    setEmailError("");
    setPasswordError("");

    const isEmailInvalid = !emailRegex.test(email);
    const isPasswordInvalid = !passwordRegex.test(password);

    if (email === "") {
      setEmailError("digite seu email");
      return;
    }
    if (isEmailInvalid) {
      setEmailError("email inválido");
      return;
    }

    if (password === "") {
      setPasswordError("digite sua senha");
      return;
    }
    if (isPasswordInvalid) {
      setPasswordError("senha inválida");
      return;
    }

    router.push("/");
  };

  const handleOnRegisterButtonClick = () => {
    router.push("/register");
  };

  return (
    <>
      <Head>
        <title>EcoTur - Login</title>
        <meta property="og:title" content="EcoTur - Login" key="title" />
      </Head>

      <main>
        <div className="d-flex vw-100 vh-100">
          <div className="w-25">
            <img
              src="/background.png"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover", opacity: ".5" }}
            />
          </div>

          <div
            className="d-flex flex-column w-100"
            style={{ background: "#A39F9F" }}
          >
            <div
              style={{ maxHeight: "fit-content", paddingTop: 52 }}
              className="align-self-center"
            >
              <Logo />
            </div>

            <div className="d-flex flex-column gap-2 w-100 align-items-center my-auto">
              <input
                placeholder="EMAIL"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                style={{
                  width: 457,
                  height: 60,
                  border: "none",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              />
              <label className="text-danger">{emailError}</label>

              <input
                placeholder="SENHA"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                style={{
                  width: 457,
                  height: 60,
                  border: "none",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              />
              <label className="text-danger">{passwordError}</label>

              <button
                onClick={handleOnLoginButtonClick}
                style={{
                  width: 339,
                  height: 45,
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                ENTRAR
              </button>
              <button
                onClick={handleOnRegisterButtonClick}
                style={{
                  width: 339,
                  height: 45,
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                REGISTRAR
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
