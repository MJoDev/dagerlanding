import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ phrases, textSpeed = 150, className = "" }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(textSpeed);

  useEffect(() => {
    let interval;
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting) {
      // Agregar caracteres a la frase
      interval = setInterval(() => {
        setCurrentText((prevText) => prevText + currentPhrase[prevText.length]);
      }, currentSpeed);
    } else {
      // Eliminar caracteres de la frase
      interval = setInterval(() => {
        setCurrentText((prevText) => prevText.slice(0, -1));
      }, currentSpeed);
    }

    if (currentText === currentPhrase && !isDeleting) {
      // Pausar antes de borrar
      setIsDeleting(true);
      setCurrentSpeed(50); // Aumentar velocidad al borrar
    } else if (currentText === "" && isDeleting) {
      // Cambiar a la siguiente frase
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setCurrentSpeed(textSpeed); // Restablecer la velocidad
    }

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte
  }, [currentText, isDeleting, currentPhraseIndex, phrases, currentSpeed, textSpeed]);

  return (
      <span className={`${className} ${isDeleting ? 'opacity-70' : 'opacity-100'} transition-opacity duration-500 overflow-hidden`}>
        {currentText}
      </span>

  );
};

export default TypewriterEffect;
