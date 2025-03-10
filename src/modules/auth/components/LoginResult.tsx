import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { User } from '../entities/User';
import { LoginUseCase } from '../usecases/LoginUseCase';

interface LoginResultProps {
  loginPromise: Promise<User>;
  loginUseCase: LoginUseCase;
}

export function LoginResult({ loginPromise, loginUseCase }: LoginResultProps) {
  const navigate = useNavigate();
  const user = useAuthLogin(loginUseCase, loginPromise);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return null;
}
