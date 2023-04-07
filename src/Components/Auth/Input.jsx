import { ErrorText } from "./ErrorText";
export const AuthInput = ({ inputType }) => {

  return <div>
    <input type={inputType} data-testid={`${inputType}-input`} required/>;
    <ErrorText type={inputType} />
  </div>
};

