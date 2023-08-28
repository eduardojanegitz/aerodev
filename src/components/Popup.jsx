import React from 'react';
import Popup from 'reactjs-popup';
import {AiFillGithub} from "react-icons/ai"
import {MdRestartAlt} from "react-icons/md"

export const PopupExample = () => (
  <Popup
    trigger={<button className="button"> Enviar </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        {/* <div className="header"> Modal Title </div> */}
        <div className="content">
          {' '}
          Agradecemos a sua mensagem! 
        </div>
        <div className="actions">
          <Popup
            trigger={<a target="_blank" href='https://github.com/eduardojanegitz/eveplane'> <AiFillGithub className='github' /> </a>}
            position="top center"
            nested
          >
          
          </Popup>
          <a onClick={() => window.location.reload(true)}> <MdRestartAlt className='restart' /> </a>
        </div>
      </div>
    )}
  </Popup>
);