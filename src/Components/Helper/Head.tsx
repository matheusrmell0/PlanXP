import React from 'react';

/**
 * Componente de Head para moficação do subtitulo, titulo e descrição do site no cabeçalho do navegador
 * Definir o novo titulo e descrição da página
 * @param {String}
 */
const Head = ({ title, desc }: { title: string; desc: string }) => {
  React.useEffect(() => {
    document.title = `Plan XP | ${title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', desc || '');
  }, [title, desc]);
  return <></>;
};

export default Head;
