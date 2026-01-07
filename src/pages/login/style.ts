import styled from 'styled-components';

    export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;    
        width: 100vw;           
        height: 100vh;          
        background-color: ${({ theme }) => theme.colors.background};
    `;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 420px;
    background: ${({ theme }) => theme.colors.surface};
    padding: 3rem;
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadow.soft};
    animation: fadeIn 0.6s ease;

    @keyframes fadeIn {
        from {
        opacity: 0;
        transform: translateY(20px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }
    `;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    `;

export const Input = styled.input`
    width: 100%;
    height: 52px;
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid transparent;
    padding: 0 1rem;
    background: #0f1424;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    transition: ${({ theme }) => theme.transition.fast};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.accent};
    }
    `;

export const Button = styled.button`
    width: 100%;
    height: 52px;
    border-radius: ${({ theme }) => theme.radius.md};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.accent}
    );
    color: white;
    font-weight: 600;
    border: none;
    transition: ${({ theme }) => theme.transition.normal};

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadow.hover};
    }
    `;

export const Error = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-bottom: 1rem;
    `;