// Declaração global para tipagem do *.module.css
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Declaração global para tipagem do tipo *.png
declare module '*.png' {
  const pgn: string;
  export default logo;
}

// Interface para a formatação e tipagem dos campos de validação de input
interface Type {
  regex: RegExp;
  message: string;
}

// Type para a tipagem dos campos de validação de input
interface Types {
  email: Type;
  number: Type;
}

// Interface para a formatação do formulario que poderá a ser enviado
interface Formulario {
  nome: string;
  email: string;
  numero: string;
  mensagem: string;
}

// Interface do FormField para o reduce do formulario
type FormField = [
  { id: 'nome' },
  { id: 'email' },
  { id: 'numero' },
  { id: 'mensagem' },
];

// Interface do reducer Mobile
interface Mobile {
  ui: { mobile: boolean | null };
}

// Interface do formulario de tipos de validação de campo do custom hook useForm
interface FormTypes {
  email: {
    regex: RegExp | string;
    message: string;
  };
  number: {
    regex: RegExp | string;
    message: string;
  };
}

// Interface do componente Input
interface Input {
  onChange?: ChangeEventHandler<HTMLInputElement> | unknown;
  onBlur?: FocusEventHandler<HTMLInputElement> | unknown;
  type: InputHTMLAttributes<string>;
  placeholder?: InputHTMLAttributes<string>;
  label: InputHTMLAttributes<string>;
  name: InputHTMLAttributes<string>;
  value?: InputHTMLAttributes<string>;
  error?: InputHTMLAttributes<string>;
}

// Interface do componente TextArea
interface TextArea {
  placeholder?: string;
  cols?: number;
  rows: number;
  label: string;
  value?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

// Interface do componente Button
interface Button {
  disabled?: boolean;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
