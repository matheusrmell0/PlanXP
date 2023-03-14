import styles from './Loading.module.css';

// Componente de loading para funções assíncronas como o envio de um formulario para uma API externa
const Loading = () => {
  return (
    <section className={styles.loading}>
      <div style={{ border: '10px solid transparent' }}></div>
    </section>
  );
};

export default Loading;
