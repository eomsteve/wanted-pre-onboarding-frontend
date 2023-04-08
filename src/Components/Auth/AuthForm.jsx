import { useState } from 'react';
import { AuthButton } from './Button';
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';

const authFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData.get('email'));
};
export const AuthForm = ({ authType }) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const emailHandler = (email)=>{
    console.log(email)
    return setEmail(()=>email);
  }
  const passwordHandler = (password)=>{
    console.log(password);
    setPassword(()=>password);
  }
  return (
    <form
      className="w-[100%] flex flex-col justify-end"
      onSubmit={authFormHandler}
    >
      <InputEmail emailHandler={emailHandler}/>
      <InputPassword passwordHandler={passwordHandler}/>
      <AuthButton authType={authType} disableState={email && password}/>
    </form>
  );
};
