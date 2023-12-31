import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ src, title, onClose }) => {
  const onEscClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    // Заборонити прокрутку під заднім планом
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    window.addEventListener('keydown', onEscClick);

    return () => {
      // Відновити прокрутку при закритті модального вікна
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      window.removeEventListener('keydown', onEscClick);
    };
  });

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>
        <img src={src} alt={title} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Modal;
