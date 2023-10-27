import css from './Button.module.css';

export const Button = ({ text, click, disable, isLoading }) => {
  return (
    <button type="button" onClick={click} disable={disable}
    className={isLoading ? css.visuallyHidden : css.Button}>
      {disable ? 'No more images' : text}
    </button>
  );
};
