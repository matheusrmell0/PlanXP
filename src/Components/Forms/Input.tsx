import styles from './Input.module.css';

// Componente Input com as propriedades e estilos tipados
const Input = ({
  onChange,
  onBlur,
  placeholder,
  type,
  label,
  name,
  value,
  error,
}: Input) => {
  return (
    <>
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
        <input
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          id={name}
          name={name}
          className={styles.input}
          type={type}
          value={value}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
    </>
  );
};

export default Input;
