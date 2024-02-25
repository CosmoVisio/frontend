import React, { useState, useEffect } from "react";
import instaIcon from "../../assets/instagram-icon.png";
import mapsIcon from "../../assets/maps-icon.jpg";
import confirmationIcon from "../../assets/confirmationIcon.png";
import ButtonWithLoading from "../Button/ButtonWithLoading";
import Logo from "../../assets/EcoPasseiosPElogo.png";

const Modal = ({
  isOpen,
  closeModal,
  imageName,
  location,
  YWF,
  title,
  subtitle,
  startDate,
  endDate,
  difficulty,
  price,
  tag,
  description,
  whatsappNumber,
  promoterName,
  promoterEmail,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    authorizeSharing: false,
  });

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [authorizeSharingError, setAuthorizeSharingError] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [loadingProgress, setLoadingProgress] = useState(0); // Loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => (prevProgress + 10) % 101);
    }, 100);

    return () => clearInterval(interval);
  }, [loading]);

  if (!isOpen) return null;

  const handleWhatsappClick = () => {
    const packageDetails = `Pacote: ${title}, Data: ${startDate}-${endDate}, Dificuldade: ${difficulty}, Preço: ${price}`;
    const reservationDetails = `Reserva: Nome: ${formData.name}, Email: ${
      formData.email
    }, Telefone: ${formData.phone}, Autorização LGPD: ${
      formData.authorizeSharing ? "Sim" : "Não"
    }`;

    const message = `Olá, tenho interesse no passeio! ${packageDetails}\n\n${reservationDetails}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}/?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleLocationClick = () => {
    window.open(`https://www.google.com/maps?q=${location}`, "_blank");
  };

  const handleReserveClick = () => {
    setCurrentStep(2); // Activate the new step
  };

  const handleFormSubmit = () => {
    // Validate form fields
    const isEmailValid = formData.email.trim() !== "";
    const isPhoneValid = formData.phone.trim() !== "";
    const isNameValid = formData.name.trim() !== "";
    const isAuthorizeSharingValid = formData.authorizeSharing;

    // Update validation state
    setEmailError(!isEmailValid);
    setPhoneError(!isPhoneValid);
    setNameError(!isNameValid);
    setAuthorizeSharingError(!isAuthorizeSharingValid);

    // Check if all form fields are valid
    if (
      isEmailValid &&
      isPhoneValid &&
      isNameValid &&
      isAuthorizeSharingValid
    ) {
      // Simulate loading effect during form submission
      setLoading(true);

      // Simulate form submission with setTimeout
      setTimeout(() => {
        // ... (existing code)

        // Reset loading state and move to the next step
        setLoading(false);
        setLoadingProgress(0); // Reset loading progress
        setCurrentStep(3);
      }, 2000); // Simulate a 2-second delay
    }
  };

  const handleInputChange = (field, value) => {
    // Remove error when user starts typing
    switch (field) {
      case "email":
        setEmailError(false);
        break;
      case "phone":
        setPhoneError(false);
        break;
      case "name":
        setNameError(false);
        break;
      case "authorizeSharing":
        setAuthorizeSharingError(false);
        break;
      default:
        break;
    }

    // Update form data
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevClick = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content shadow w-75"
        onClick={(e) => e.stopPropagation()}
      >
        {currentStep === 1 && (
          <div className="d-flex flex-column">
            <button className="my-3 align-self-end" onClick={closeModal}>
              Fechar
            </button>
            <div className="image-container">
              {imageName.map((item, index) => {
                return (
                  <img
                    key={index}
                    className="image"
                    src={item.src}
                    alt={title}
                  />
                );
              })}
            </div>
            <p>{YWF}</p>
            <div className="modal-info row">
              <div className="col-md-6">
                <h2 className="mb-0">{title}</h2>
                <div className="button-local mb-2">
                  <img
                    src={mapsIcon.src}
                    alt="Maps Icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <a onClick={handleLocationClick}>Localização</a>
                </div>
                <p>Descrição do passeio: {description}</p>
              </div>

              <div className="col-md-6">
                <div className="">
                  <p>{subtitle}</p>
                  <p>
                    {startDate} - {endDate}
                  </p>
                  <p>Dificuldade: {difficulty}</p>
                  <p className="price">Price: {price}</p>
                  <div>
                    <img
                      src={instaIcon.src}
                      alt="Instagram Icon"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <a
                      href={`https://www.instagram.com/explore/tags/${tag}`}
                      target="_blank"
                    >
                      Veja a experiência das pessoas nesse lugar!
                    </a>
                  </div>
                </div>
                <div className="button-container mt-4">
                  <button
                    className="reserve-button"
                    onClick={handleReserveClick}
                  >
                    Reservar
                  </button>
                  <button
                    className="contact-button"
                    onClick={handleWhatsappClick}
                  >
                    Falar no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="step-2 d-flex">
            <div className="reservation-form">
              <form>
                <label>Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={emailError ? "error" : ""}
                />
                {emailError && (
                  <p className="error-message">
                    Por favor, preencha o campo de email.
                  </p>
                )}

                <label>Telefone:</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={phoneError ? "error" : ""}
                />
                {phoneError && (
                  <p className="error-message">
                    Por favor, preencha o campo de telefone.
                  </p>
                )}

                <label>Nome:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={nameError ? "error" : ""}
                />
                {nameError && (
                  <p className="error-message">
                    Por favor, preencha o campo de nome.
                  </p>
                )}

                <div className="d-flex">
                  <input
                    type="checkbox"
                    checked={formData.authorizeSharing}
                    onChange={(e) =>
                      handleInputChange("authorizeSharing", e.target.checked)
                    }
                    className={
                      authorizeSharingError
                        ? "error input-checkbox"
                        : "input-checkbox"
                    }
                  />

                  <label>
                    Autorizo o compartilhamento das minhas informações de
                    contato com o guia.
                  </label>

                  {authorizeSharingError && (
                    <p className="error-message">
                      Por favor, autorize o compartilhamento dos dados.
                    </p>
                  )}
                </div>

                <ButtonWithLoading
                  progressText="Reservando..."
                  completeText="Reservar!"
                  type="button"
                  onClick={handleFormSubmit}
                  disabled={loading}
                ></ButtonWithLoading>
                <button className="cancel-button" onClick={handlePrevClick}>
                  Cancelar reserva
                </button>
              </form>

              <p></p>
            </div>
            <div className="package-summary">
              <img src={imageName[0].src} alt={title} className="card-image" />
              <div className="card-info">
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <p>
                  {startDate}-{endDate}
                </p>
                <p>Difficulty: {difficulty}</p>
                <p className="price">Price: {price}</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="d-flex ">
            <div className="confirmation-message">
              <img
                src={Logo.src}
                alt="Reserva Confirmada"
                className="confirmation-image-logo"
              />
              <p className="confirmation-text">
                Reserva confirmada! Um resumo do seu pedido foi enviado para o
                seu email.
              </p>
              <div className="images-container">
                <img
                  src={confirmationIcon.src}
                  alt="Reserva Confirmada"
                  className="confirmation-image"
                />
              </div>
              <div className="card-info">
                <h4>Organizador: {promoterName}</h4>
                <p>Email do Organizador: {promoterEmail}</p>
                <p>Contato: {whatsappNumber}</p>
              </div>
              <p className="confirmation-text">
                Uma solicitação de compra foi encaminhada ao guia.
              </p>
              <p className="confirmation-text">
                O guia entrará em contato com você.
              </p>
              <p className="confirmation-text">Obrigado!</p>
            </div>
            <div className="package-summary">
              <h3>Pedido Nº 1523656</h3>
              <img src={imageName[0].src} alt={title} className="card-image" />
              <div className="card-info">
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <p>
                  {startDate}-{endDate}
                </p>
                <p>Difficulty: {difficulty}</p>
                <p className="price">Price: {price}</p>
              </div>
            </div>
          </div>
        )}
        <div className="button-container mt-4">
          {currentStep === 3 && (
            <button
              className={`contact-button ${loading ? "progress" : ""}`}
              onClick={handleWhatsappClick}
            >
              {loading ? (
                <>
                  Enviando...
                  <div
                    className="loading-bar"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </>
              ) : (
                "Falar no WhatsApp"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
