import { useNavigate } from 'react-router-dom';
import Error from './Error';
import React from 'react';
import Loading from './Loading';

// Pagina não encontrada
const Pagina404 = () => {
  const navigate = useNavigate();

  // Hook para redirecionar o usuario para a pagina principal
  React.useEffect(() => {
    let wait = false;
    function navFeed() {
      navigate('/');
      return <Loading />;
    }
    if (!wait) {
      setTimeout(navFeed, 2000);
      wait = true;
    }
    setTimeout(() => {
      wait = false;
    }, 500);
  }, [navigate]);

  return (
    <section>
      <Error error="Erro: 404" />
      <p className="sub-title">Página não encontrada</p>
    </section>
  );
};

export default Pagina404;
