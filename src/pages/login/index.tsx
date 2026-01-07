import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import { Container, Card, Title, Input, Button, Error } from './style.ts';


export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const isAuthenticated = login(username, password);

        if (isAuthenticated) {
            navigate('/home');
        } else {
            setError('Hmm… tenta lembrar do nosso jeitinho 💕');
        }
    }

    return (

        <Container>
            <Card>
                <Title>Área exclusiva</Title>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <Error style={{ color: '#E63946', textAlign: 'center' }}>{error}</Error>}

                    <Button type="submit">Entrar</Button>
                </form>
            </Card>
        </Container>
    );
}
