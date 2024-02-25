import React, { useState, useEffect } from 'react';

const ButtonWithLoading = ({ progressText, completeText, onClick, disabled }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    setLoading(true);

    const uploadTimer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 10) % 101);

      if (progress >= 100) {
        clearInterval(uploadTimer);
        setLoading(false);
      }
    }, 500);

    // Invoke the onClick function passed from the parent
    onClick();
  };

  useEffect(() => {
    setLoading(false);
    setProgress(0);
  }, [disabled]);

  return (
    <button className="button" onClick={handleButtonClick} disabled={loading || disabled}>
      <div className="button__progress" style={{ width: `${progress}%`, backgroundColor: '#022F07' }}></div>
      <span className="button__text">{loading ? progressText : completeText}</span>
    </button>
  );
};

export default ButtonWithLoading;
