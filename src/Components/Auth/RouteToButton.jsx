import { useRouter } from '../../hooks/useRouter';

export const RouteToButton = ({ authType }) => {
  const opposite = authType === 'signin' ? 'signup' : 'signin';
  const { routeTo } = useRouter();
  return (
    <span
      className="text-sky-500 text-sm mt-2 cursor-pointer"
      onClick={() => routeTo(`/${opposite}`)}
    >
      {`go to ${opposite} >`}
    </span>
  );
};
