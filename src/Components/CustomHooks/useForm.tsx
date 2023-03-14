import React from 'react';

// Objeto com as propriedades a serem verificadas nos campos de input do site
/**
 * Definir o nome do tipo a ser verificado com o campo de expressão regular e menssagem de erro a ser mostrada caso a verificação retorne falsa
 */
const types: FormTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  number: {
    regex: /^[\d,.?!]+$/,
    message: 'Este campo só aceita números',
  },
};

/**
 * Função useForm que recebe o parametro type
 * * @param {String} type
 * O parametro type corresponde ao nome do objeto declarado no objeto types
 * A função verifica se o tipo corresponde ao objeto declarado com a tipagem de Regex e a menssagem declarada
 * Declarar 'false' no parametro type caso o dev não deseje utilizar a validação de Regex
 */
const useForm = (type?: unknown | string) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  // Função que verifica a validação de expressão regular (Regex)
  // Em caso de false na verificação do Regex retorna o erro que o dev declarar no objeto types conforme o parametro type declarado na função useForm e salva este valor no estado reativo setError(error) 
  // Em caso de true na verificação do Regex a função retorna verdadeira e confirma sua validação correta do input
  function validation(valueChecked: string) {
    if (type === false) return true;
    if (valueChecked.length === 0) {
      setError('Preencha este campo');
      return false;
    } else if (
      typeof types === 'string' &&
      typeof type === 'string' &&
      types[types[typeof type === 'string' ? type : '']] &&
      `${!types[type]}.regex.${test(valueChecked)}`
    ) {
      typeof type === 'string' && setError(types[type]['message']);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // Função que verifica o Regex em cada novo carácter alterado ou adicionado no campo de input para a verificação instantânea, garantindo uma melhor experiencia de usuario
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (error) validation(event.target.value);
    setValue(event.target.value);
  }
  
  // Retorna as funções valores e estados devidamente tipados e verificados via Regex
  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value),
  };
};

export default useForm;
