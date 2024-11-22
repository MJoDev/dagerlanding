import React, { useState, useEffect } from 'react';


const TypingEffect = ({ texts, typingSpeed = 60, pauseTime = 2000, className = ''}) => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const type = () => {
        const fullText = texts[index];
  
        if (!isDeleting && charIndex < fullText.length) {
          // Escribe el texto carácter por carácter
          setCurrentText((prev) => prev + fullText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          // Borra el texto carácter por carácter
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else if (!isDeleting && charIndex === fullText.length) {
          // Pausa antes de empezar a borrar
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
          // Pausa antes de pasar al siguiente texto
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length); // Cambia al siguiente texto
        }
      };
  
      const timeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
      return () => clearTimeout(timeout); // Limpia el timeout
    }, [charIndex, isDeleting, index, texts, typingSpeed, pauseTime]);
  return <span className={`typing-effect ${className}`} id="text-container" >{currentText}</span>;
};

export default TypingEffect;
