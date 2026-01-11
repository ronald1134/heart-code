import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RomanticLoader } from '../../components/RomanticLoader';
import { useAuth } from '../../contexts/AuthContext';
import * as S from './style';

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);

        setTimeout(() => {
            const isAuthenticated = login(username, password);

            if (isAuthenticated) {
                navigate('/home');
            } else {
                setLoading(false);
                setError('Hmm… tenta lembrar do nosso jeitinho 💕');
            }
        }, 2000);
    }

    return (
        <>
            {loading && <RomanticLoader />}

            <S.Container>
                <S.Card>
                    <h1>Bem-vinda ❤️</h1>
                    <p>Tem algo especial te esperando</p>

                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <S.Error style={{ color: '#E63946', textAlign: 'center' }}>{error}</S.Error>}
                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                </S.Card>
            </S.Container>
        </>
    );
}
