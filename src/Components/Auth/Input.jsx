import { ErrorText } from './ErrorText';
export const AuthInput = ({ inputType }) => {
  return (
    <div className='mb-3 '>
      <input
        className="w-[100%] border-solid border-2 rounded-md border-slate-500 focus:border-sky-400 h-5 py-4 px-3"
        type={inputType}
        data-testid={`${inputType}-input`}
        placeholder={inputType}
        required
      />
      {/* <ErrorText type={inputType} /> */}
    </div>
  );
};
