import React, { useRef, useState } from "react";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

Modal.setAppElement("#root");

export const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const reloadPage = () => {
    location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_KEY,
        ref.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.log(error);
          setSuccess(false);
        }
      );
  };

  return (
    <div>
      <form className="form" ref={ref} onSubmit={handleSubmit}>
        <h1 className="form-title">Contate-me</h1>
        <input name="name" className="input" placeholder="Nome" required />
        <input name="email" className="input" placeholder="E-mail" required />
        <textarea
          className="textarea"
          placeholder="Escreva a sua mensagem..."
          rows={10}
          name="message"
          required
        />
        <button className="button" type="submit" onClick={openModal}>
          Enviar
        </button>
      </form>
      {success == true ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Links do GitHub e LinkedIn"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header">
            <h3>Muito obrigado pela mensagem!</h3>
            <button className="modal-close-button" onClick={closeModal}>
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="modal-body">
            <a
              href="https://github.com/eduardojanegitz/aerodev"
              target="_blank"
            >
              {" "}
              <img src={Github} alt="Ícone di Github"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-alves-091aa1219/"
              target="_blank"
            >
              {" "}
              <img src={Linkedin} alt="Ícone do Linkedin"></img>
            </a>
          </div>
          <div className="reload-page">
            <button className="button" onClick={reloadPage}>
              Viajar novamente
            </button>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
