const Error = ({ error }: { error: string }) => {

  // Componente de erro que recebe a menssagem de erro com o estilo pre definido
  return (
    <section>
      <h1 style={{ textDecoration: 'underline' }} className="title">
        {error}
      </h1>
    </section>
  );
};

export default Error;
