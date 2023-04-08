import { isDisabled } from '@testing-library/user-event/dist/utils';

export const AuthButton = ({ authType, disableState }) => {
  const label = authType === 'signin' ? 'Sign in' : 'Sign Up';
  return (
    <button
      className="disabled:opacity-50 disabled:bg-slate-500 border-2 rounded-md"
      type="submit"
      data-testid={`${authType}-button`}
      disabled={!disableState}
      name={`${authType}`}
    >
      {label}
    </button>
  );
};
