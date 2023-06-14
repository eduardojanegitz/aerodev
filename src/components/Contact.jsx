import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b3fkq1m",
        "template_rg3pq8i",
        ref.current,
        "XjIAlJflG5LEd35gy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <form className="form" ref={ref} onSubmit={handleSubmit}>
      <h1>Contate-nos</h1>
      <input className="input" placeholder="Nome" />
      <input className="input" placeholder="E-mail" />
      <textarea
        className="textarea"
        placeholder="Escreva a sua mensagem..."
        rows={10}
        name="message"
      />
      <button className="button" type="submit">
        Enviar
      </button> 
      {
        success && "Agradecemos a sua mensagem!"
      }
    </form>
  );
};
