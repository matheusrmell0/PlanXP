import React from 'react';
import useForm from './CustomHooks/useForm';
import styles from './Formulario.module.css';
import Input from './Forms/Input';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from './Forms/Button';
import TextArea from './Forms/TextArea';

// Array com o padrao de formulario a ser tipado com a função reducer
const formField: FormField = [
  { id: 'nome' },
  { id: 'email' },
  { id: 'numero' },
  { id: 'mensagem' },
];

const Formulario = () => {
  // Função reducer retornando o objeto tipado com o padrão da array formField para a logica de acrescentar dados de forma automatizada de acordo com o formField
  const formData: Formulario | {} = formField.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: '',
    };
  }, {});

  // Estado reativo do captcha e do formulario
  const [captcha, setCaptcha] = React.useState<String | null>();
  const [form, setForm] = React.useState(formData);

  // useForm para validação do tipo de dado através da expressão regular do custom hook
  const email = useForm('email');
  const numero = useForm('number');
  const nome = useForm();
  const mensagem = useForm();

  // Envio do formulario com as verificações de Regex e captcha devidamente preenchidos
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (
        captcha &&
        email.validation() &&
        numero.validation() &&
        nome.validation() &&
        mensagem.validation()
      ) {
        setForm({
          ...form,
          nome: nome.value,
          email: email.value,
          numero: numero.value,
          mensagem: mensagem.value,
        });
      }
    },
    [form],
  );

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <div className={`${styles.name}`}>
        <Input {...nome} name="nome" type="text" label="Nome:" />
      </div>
      <div className={`${styles.email}`}>
        <Input
          placeholder="contato@email.com"
          name="email"
          {...email}
          type="email"
          label="Email:"
        />
      </div>
      <div className={`${styles.phone}`}>
        <Input
          {...numero}
          name="telefone"
          type="text"
          label="Telefone:"
          placeholder="(99) 99999-9999"
        />
      </div>
      <div className={`${styles.message}`}>
        <TextArea
          {...mensagem}
          placeholder="Deixe sua dúvida aqui"
          label="Mensagem:"
          name="mensagem"
          rows={6}
        />
      </div>
      <ReCAPTCHA
        sitekey="6Lc-8ekkAAAAAJFSQQYalL7MBgOJigOI-DlNIHiy"
        onChange={(token: string | null) => setCaptcha(token)}
      />
      <div className={`${styles.btn}`}>
        <Button disabled={!captcha ? true : false}>Enviar</Button>
      </div>
    </form>
  );
};

export default Formulario;
