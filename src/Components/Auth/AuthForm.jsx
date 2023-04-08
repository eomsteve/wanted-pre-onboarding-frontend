import { useState } from 'react';
import { AuthButton } from './Button';
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { signin, signup } from '../../api/auth';
import { useRouter } from '../../hooks/useRouter';

export const AuthForm = ({ authType }) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const {routeTo} = useRouter();
  const authFormHandler = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const userData = {
      email : formData.get("email"),
      password : formData.get("password")
    }
    console.log(userData);
    if(authType === "signup") {
      try {
        const signupRes = await signup(userData);
        if(signupRes){
          alert("회원가입 완료, 로그인창으로 이동합니다.")
          routeTo('/signin')
        }
      } catch (error) {
        alert(error.response.data.message)
      }
    }else{
      try {
        const signinRes = await signin(userData);
        if(signinRes){
          alert("로그인 완료.");
          // console.log(signinRes)
          localStorage.setItem("token", signinRes.data.access_token)
          routeTo('/todo')
        }
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  };
  const emailHandler = (email)=>{
    return setEmail(()=>email);
  }
  const passwordHandler = (password)=>{
    return setPassword(()=>password);
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
