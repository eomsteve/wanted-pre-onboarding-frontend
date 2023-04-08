import { ErrorText } from './ErrorText';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { passwordValidator } from '../../utils/auth';
export const InputPassword = ({ isError }) => {
  const ErrorMessage = '비밀번호 입력을 확인해 주세요';
  const [userInput, setUserInput] = useState('');
  const [isValidated, setIsValidated] = useState(true);
  const inputValue = useDebounce(userInput);
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    setIsValidated(() => passwordValidator(inputValue));
  }, [inputValue]);
  return (
    <div className="mb-3 flex items-end flex-col">
      <input
        className="w-[100%] border-solid border-2 rounded-md border-slate-500 focus:border-sky-400 h-5 py-4 px-3"
        type="password"
        data-testid="password-input"
        placeholder="password"
        onChange={onChangeHandler}
        required
      />
      {inputValue && !isValidated ? <ErrorText texts={ErrorMessage} /> : ''}
    </div>
  );
};
