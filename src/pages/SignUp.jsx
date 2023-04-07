import { AuthForm } from '../Components/Auth/AuthForm';
import { RouteToButton } from '../Components/Auth/RouteToButton';
export const SignUpPage = () => {
  return (
    <div className="Container flex flex-col justify-center items-center w-[30vw] h-[100%]">
      <h1 className="my-10 font-[100] text-5xl">SIGN UP</h1>
      <AuthForm authType={'signup'} />
      <div className="flex justify-end w-[100%]">
        <RouteToButton authType={'signup'} />
      </div>
    </div>
  );
};
