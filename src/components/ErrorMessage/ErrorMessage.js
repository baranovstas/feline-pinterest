import errorMessageStyles from './ErrorMessage.module.scss';
import img from './error.gif';

const ErrorMessage = ({ errorMessage }) => (
  <div className={errorMessageStyles.error}>
    <img
      className={errorMessageStyles.img}
      src={img}
      alt='Ошибка'
    />
    <p>{errorMessage}</p>
  </div>
);

export default ErrorMessage;