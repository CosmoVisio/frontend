import React from 'react';

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
  } = props;

  return (
    <a href={link} className="card">
      <img
        src={imageName}
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
  );
};

export default Card;
