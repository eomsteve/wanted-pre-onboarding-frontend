import { useState } from 'react';
import { AuthButton } from './Button';
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';

const authFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

};
export const AuthForm = ({ authType }) => {
  const [formValidation, setFormValidation] = useState({
    email : false,
    password : false
  });
  return (
    <form className='w-[100%] flex flex-col justify-end' onSubmit={authFormHandler}>
      <InputEmail />
      <InputPassword />
      <AuthButton authType={authType} isValidated={formValidation} />
    </form>
  );
};
