import React, { useState, useEffect } from 'react';
import instaIcon from '../../assets/instagram-icon.png';
import mapsIcon from '../../assets/maps-icon.jpg';
import ButtonWithLoading from '../Button/ButtonWithLoading'
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
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
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
    const reservationDetails = `Reserva: Nome: ${formData.name}, Email: ${formData.email}, Telefone: ${formData.phone}, Autorização LGPD: ${
      formData.authorizeSharing ? 'Sim' : 'Não'
    }`;

    const message = `Olá, tenho interesse no passeio! ${packageDetails}\n\n${reservationDetails}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${whatsappNumber}/?text=${encodedMessage}`, '_blank');
  };

  const handleLocationClick = () => {
    window.open(`https://www.google.com/maps?q=${location}`, '_blank');
  };

  const handleReserveClick = () => {
    setCurrentStep(2); // Activate the new step
  };


  const handleFormSubmit = () => {
    // Validate form fields
    const isEmailValid = formData.email.trim() !== '';
    const isPhoneValid = formData.phone.trim() !== '';
    const isNameValid = formData.name.trim() !== '';
    const isAuthorizeSharingValid = formData.authorizeSharing;

    // Update validation state
    setEmailError(!isEmailValid);
    setPhoneError(!isPhoneValid);
    setNameError(!isNameValid);
    setAuthorizeSharingError(!isAuthorizeSharingValid);

    // Check if all form fields are valid
    if (isEmailValid && isPhoneValid && isNameValid && isAuthorizeSharingValid) {
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
      case 'email':
        setEmailError(false);
        break;
      case 'phone':
        setPhoneError(false);
        break;
      case 'name':
        setNameError(false);
        break;
      case 'authorizeSharing':
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
    <div className="modal-overlay container" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {currentStep === 1 && (
          <div>

            <div className="image-container">
            {imageName.map((item, index) => {
                return (
                    <img key={index} className="image" src={item.src} alt={title} />
                );
                })}
            </div>
            <p>{YWF}</p>
            <div className="modal-info row">
              <div className="col-md-6">
                <h2 className="mb-0">{title}</h2>
                <div className="button-local mb-2">
                  <img src={mapsIcon.src} alt="Maps Icon" style={{ width: '20px', height: '20px' }} />
                  <a onClick={handleLocationClick}>Localização</a>
                </div>
                <p>Descrição do passeio: {description}</p>
              </div>

              <div className="col-md-6">
                <div className="">
                  <p>{subtitle}</p>
                  <p>
                    {startDate}-{endDate}
                  </p>
                  <p>Difficulty: {difficulty}</p>
                  <p className="price">Price: {price}</p>
                  <div>
                    <img
                      src={instaIcon.src}
                      alt="Instagram Icon"
                      style={{ width: '20px', height: '20px', marginRight: '10px' }}
                    />
                    <a href={`https://www.instagram.com/explore/tags/${tag}`} target="_blank">
                      Veja a experiência das pessoas nesse lugar!
                    </a>
                  </div>
                </div>
                <div className="button-container mt-4">
                  <button className="reserve-button" onClick={handleReserveClick}>
                    Reservar
                  </button>
                  <button className="contact-button" onClick={handleWhatsappClick}>
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
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={emailError ? 'error' : ''}
                />
                {emailError && <p className="error-message">Por favor, preencha o campo de email.</p>}

                <label>Telefone:</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={phoneError ? 'error' : ''}
                />
                {phoneError && <p className="error-message">Por favor, preencha o campo de telefone.</p>}

                <label>Nome:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={nameError ? 'error' : ''}
                />
                {nameError && <p className="error-message">Por favor, preencha o campo de nome.</p>}

                <div className='d-flex'>
                  <input
                    type="checkbox"
                    checked={formData.authorizeSharing}
                    onChange={(e) => handleInputChange('authorizeSharing', e.target.checked)}
                    className={authorizeSharingError ? 'error input-checkbox' : 'input-checkbox' }
                  />
                  
                  <label>
                    Autorizo o compartilhamento das minhas informações de contato com o guia.
                  </label>

                  {authorizeSharingError && (
                    <p className="error-message">Por favor, autorize o compartilhamento dos dados.</p>
                  )}
                </div>
                
                <ButtonWithLoading progressText="Reservando..." completeText="Reservar!" type="button" onClick={handleFormSubmit} disabled={loading}>
                 
                </ButtonWithLoading>
                <button className="cancel-button" onClick={handlePrevClick}>
                    Cancelar reserva
                </button>
              </form>

              <p>
              </p>
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
          <div>
            {/* Step 3 content (confirmation or additional steps) */}
            <p>Reserva confirmada! Ou adicione mais conteúdo para o próximo passo.</p>
            {/* ... (additional content) */}
          </div>
        )}

<div className="button-container mt-4">
         
         
          {currentStep === 3 && (
            <button className={`contact-button ${loading ? 'progress' : ''}`} onClick={handleWhatsappClick}>
              {loading ? (
                <>
                  Enviando...
                  <div className="loading-bar" style={{ width: `${loadingProgress}%` }} />
                </>
              ) : (
                'Falar no WhatsApp'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
