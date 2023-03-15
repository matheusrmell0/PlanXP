import styles from './Button.module.css';

// Componente Button com as propriedades e estilos tipados
const Button = ({
  disabled,
  children,
  onClick,
  ...props
}: Button) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        {...props}
        className={styles.button}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
