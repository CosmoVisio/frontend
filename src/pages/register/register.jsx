import { Logo } from "@/components/Icons";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const nameRegex = /^[a-z ,.'-]+$/;

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const lastNameRegex = /^[a-z ,.'-]+$/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  // O email deve estar no formato email@email.com
  const emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");
  // A senha deve ser alfanumérica, com no mínimo 8 caracteres
  // contendo 1 número, 1 lowerCase e 1 upperCase
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  const handleOnRegisterButtonClick = () => {
    setNameError("");
    setLastNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");

    const isNameInsvalid = !nameRegex.test(name);
    const isLastNameInvalid = !lastNameRegex.test(lastName);
    const isEmailInvalid = !emailRegex.test(email);
    const isPhoneInvalid = !phoneRegex.test(phone);
    const isPasswordInvalid = !passwordRegex.test(password);
    const isPasswordConfirmationInvalid =
      !passwordRegex.test(passwordConfirmation);

    if (name === "") {
      setNameError("digite um nome");
      return;
    }
    if (isNameInsvalid) {
      setNameError("nome inválido");
      return;
    }

    if (lastName === "") {
      setLastNameError("digite um sobrenome");
      return;
    }
    if (isLastNameInvalid) {
      setLastNameError("sobrenome inválido");
      return;
    }

    if (email === "") {
      setEmailError("digite seu email");
      return;
    }
    if (isEmailInvalid) {
      setEmailError("email inválido");
      return;
    }

    if (phone === "") {
      setPhoneError("digite um telefone");
      return;
    }
    if (isPhoneInvalid) {
      setPhoneError("telefone inválido");
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
    if (passwordConfirmation === "") {
      setPasswordConfirmationError("digite sua senha novamente");
      return;
    }
    if (isPasswordConfirmationInvalid) {
      setPasswordConfirmationError("senha inválida");
      return;
    }
    if (password !== passwordConfirmation) {
      setPasswordError("as senhas não são iguais");
      setPasswordConfirmationError("as senhas não são iguais");
      return;
    }

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>EcoTur - Cadastro</title>
        <meta property="og:title" content="EcoTur - Cadastro" key="title" />
      </Head>

      <main>
        <div className="d-flex vw-100 vh-100">
          <div className="w-25">
            <img
              src="/f3d35c1c67d426c4a63e4dcabde7c2c3.png"
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

            <div className="d-flex flex-column gap-3 my-auto align-items-center">
              <div className="d-flex gap-3 justify-content-between">
                <div className="d-flex flex-column">
                  <input
                    placeholder="NOME"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    style={{
                      width: 415,
                      height: 43,
                      border: "none",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  />
                  <label className="text-danger">{nameError}</label>
                </div>

                <div className="d-flex flex-column">
                  <input
                    placeholder="SOBRENOME"
                    type="text"
                    onChange={(event) => setLastName(event.target.value)}
                    style={{
                      width: 415,
                      height: 43,
                      border: "none",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  />
                  <label className="text-danger">{lastNameError}</label>
                </div>
              </div>

              <div className="d-flex gap-3 justify-content-between">
                <div className="d-flex flex-column">
                  <input
                    placeholder="EMAIL"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    style={{
                      width: 415,
                      height: 43,
                      border: "none",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  />
                  <label className="text-danger">{emailError}</label>
                </div>

                <div className="d-flex flex-column">
                  <input
                    placeholder="NÚMERO DE CELULAR"
                    type="tel"
                    onChange={(event) => setPhone(event.target.value)}
                    style={{
                      width: 415,
                      height: 43,
                      border: "none",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  />
                  <label className="text-danger">{phoneError}</label>
                </div>
              </div>

              <div className="d-flex gap-3 justify-content-between">
                <div className="d-flex flex-column">
                  <input
                    placeholder="SENHA"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    style={{
                      width: 415,
                      height: 43,
                      border: "none",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  />
                  <label className="text-danger">{passwordError}</label>
                </div>

                <div className="d-flex flex-column">
                  <input
                    placeholder="CONFIRME A SENHA"
                    type="password"
                    onChange={(event) =>
                      setPasswordConfirmation(event.target.value)
                    }
                    style={{
                      width: 415,
                      height: 43,
                      border: "none",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  />
                  <label className="text-danger">
                    {passwordConfirmationError}
                  </label>
                </div>
              </div>

              <button
                onClick={handleOnRegisterButtonClick}
                style={{
                  width: 339,
                  height: 45,
                  border: "none",
                  borderRadius: "20px",
                }}
                className="mt-5"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
