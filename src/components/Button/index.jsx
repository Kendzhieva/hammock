import styles from './button.module.css';

const Button = ({ children, className }) => {
  return (
    <button className={`${className} ${styles.button}`}>{children}</button>
  );
};

export default Button;
