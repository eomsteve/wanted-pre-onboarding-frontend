import { ErrorText } from './ErrorText';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { emailValidator } from '../../utils/auth';
export const InputEmail = ({ emailHandler }) => {
  const ErrorMessage = '이메일 입력을 확인해 주세요';
  const [userInput, setUserInput] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const inputValue = useDebounce(userInput);
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    setIsValidated(() => emailValidator(inputValue));
    if (isValidated) {
      emailHandler(true);
    } else {
      emailHandler(false);
    }
  }, [inputValue, isValidated]);
  return (
    <div className="mb-3 flex items-end flex-col">
      <input
        className="w-[100%] border-solid border-2 rounded-md border-slate-500 focus:border-sky-400 h-5 py-4 px-3"
        type="email"
        data-testid="email-input"
        placeholder="email"
        onChange={onChangeHandler}
        name="email"
        required
      />
      {!inputValue || isValidated ? '' : <ErrorText texts={ErrorMessage} />}
    </div>
  );
};
