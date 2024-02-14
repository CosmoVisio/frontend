import React from 'react';
import instaIcon from '../../assets/instagram-icon.png';
import mapsIcon from '../../assets/maps-icon.jpg';

const Modal = ({ isOpen, closeModal, imageName, location, YWF, title, subtitle, startDate, endDate, difficulty, price, tag, description, whatsappNumber }) => {
    if (!isOpen) return null;

    const handleWhatsappClick = () => {
        const defaultMessage = `Olá, tenho interesse no passeio! ${title} que vai ocorrer no dia ${startDate}`;
        const encodedMessage = encodeURIComponent(defaultMessage);

        window.open(`https://wa.me/${whatsappNumber}/?text=${encodedMessage}`, '_blank');
    };

    const handleLocationClick = () => {
        window.open(`https://www.google.com/maps?q=${location}`, '_blank');
    };

    return (
        <div className="modal-overlay container" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='image-container'>
                    {imageName.map((item, index) => (
                        <img key={index} className="image" src={item} alt={title} />
                    ))}
                </div>
                <p>{YWF}</p>


                <div className="modal-info row">
                    <div className="col-md-6">
                        <h2 className='mb-0'>{title}</h2>
                        <div className='button-local mb-2'>
                            <img
                                src={mapsIcon.src}
                                alt="Maps Icon"
                                style={{ width: '20px', height: '20px' }}
                            />
                            <a onClick={handleLocationClick}>Localização</a>
                        </div>
                        <p>Descrição do passeio: {description}</p>
                    </div>

                    <div className="col-md-6">
                        <div className=''>
                            <p>{subtitle}</p>
                            <p>{startDate}-{endDate}</p>
                            <p>Difficulty: {difficulty}</p>
                            <p className='price'>Price: {price}</p>
                            <div>
                                <img
                                    src={instaIcon.src}
                                    alt="Instagram Icon"
                                    style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                />
                                <a href={`https://www.instagram.com/explore/tags/${tag}`} target='_blank'>Veja a experiência das pessoas nesse lugar!</a>
                            </div>
                        </div>
                        <div className="button-container mt-4">
                            <button className="reserve-button">Reservar</button>
                            <button className="contact-button" onClick={handleWhatsappClick}>Falar no WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
