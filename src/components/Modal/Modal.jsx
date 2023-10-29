import { createPortal } from 'react-dom';
import { Component } from 'react';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.escKeyDown);
  }
  escKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClick();
    }
  };
  backdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.toggleModal();
    }
  };
  render() {
    const { children, onClick } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={onClick}>
        <div className={css.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
