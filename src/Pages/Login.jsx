// src/pages/Login.jsx
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom'; 
import { Message } from 'primereact/message'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);     

    const navigate = useNavigate();

    const handleSubmit = async (event) => { 
        event.preventDefault();
        setError(null);
        setLoading(true);

        if (!username || !password) {
            setError("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        try {
            const API_URL = 'http://localhost:3001/api/login';
            const credentials = {
                username: username, 
                password: password
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials) 
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login bem-sucedido:', data);
                if (data.token) {
                    localStorage.setItem('authToken', data.token);
                }
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Credenciais inválidas. Tente novamente.');
                console.error('Erro no login:', errorData);
            }
        } catch (err) {
            console.error('Erro na requisição de login:', err);
            setError('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-content-center align-items-center min-h-screen" style={{ backgroundColor: '#1e1e2f' }}>
            <Card title="Login" className="p-card-shadow" style={{ width: '25rem', backgroundColor: '#2a2d3e', color: '#ffffff' }}>
                <form onSubmit={handleSubmit} className="p-fluid">
                    {error && <Message severity="error" text={error} className="mb-3 w-full" />}

                    <div className="field mb-4">
                        <span className="p-float-label">
                            <InputText
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full"
                                style={{ backgroundColor: '#3a3d4e', color: '#ffffff', borderColor: '#4a4d5e' }}
                                disabled={loading} 
                            />
                            <label htmlFor="username" style={{ color: '#cccccc' }}>Usuário</label>
                        </span>
                    </div>

                    <div className="field mb-4">
                        <span className="p-float-label">
                            <Password
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                toggleMask
                                className="w-full"
                                inputStyle={{ backgroundColor: '#3a3d4e', color: '#ffffff', borderColor: '#4a4d5e' }}
                                feedback={false}
                                disabled={loading} // Desabilita input durante o carregamento
                            />
                            <label htmlFor="password" style={{ color: '#cccccc' }}>Senha</label>
                        </span>
                    </div>

                    <Button
                        label={loading ? "Entrando..." : "Entrar"}
                        icon={loading ? "pi pi-spin pi-spinner" : "pi pi-sign-in"}
                        type="submit"
                        className="mt-2 p-button-primary w-full"
                        disabled={loading} 
                    />
                </form>
            </Card>
        </div>
    );
};

export default Login;