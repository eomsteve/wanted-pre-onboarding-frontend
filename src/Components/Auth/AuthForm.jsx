import { useState } from 'react';
import { AuthButton } from './Button';
import { AuthInput } from './Input';

const authFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

};
export const AuthForm = ({ authType }) => {
  const [isValidated, setIsValidated] = useState(false);
  return (
    <form className='w-[100%] flex flex-col justify-end' onSubmit={authFormHandler}>
      <AuthInput inputType={'email'} />
      <AuthInput inputType={'password'} />
      <AuthButton authType={authType} />
    </form>
  );
};
