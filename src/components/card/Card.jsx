import React, { useState } from 'react';
import Modal from '../modal/modal'; // Certifique-se de ajustar o caminho conforme necessário

const Card = (props) => {
  const {
    imageName,
    title,
    subtitle,
    startDate,
    endDate,
    difficulty,
    price,
    link,
    tag,
    whatsappNumber,
    description,
    YWF,
    location,
    openModal,
    promoterName,
    promoterEmail// Adicione a propriedade openModal
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    openModal(); // Chama a função passada por props para abrir o modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <a className="card" onClick={handleCardClick}>
        <img
          src={imageName[1].src}
          alt={title}
          className="card-image"
        />
        <div className="card-info">
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <p>{startDate}-{endDate}</p>
          <p>Difficulty: {difficulty}</p>
          <p className='price'>Price: {price}</p>
        </div>
      </a>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={title}
        subtitle={subtitle}
        startDate={startDate}
        endDate={endDate}
        difficulty={difficulty}
        price={price}
        imageName={imageName}
        tag={tag}
        description={description}
        whatsappNumber={whatsappNumber}
        YWF={YWF}
        location={location}
        promoterName={promoterName}
        promoterEmail={promoterEmail}
      />
    </>
  );
};

export default Card;
