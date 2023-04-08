import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const router = useNavigate();

  return {
    routeTo: (path) => router(path),
  };
};
