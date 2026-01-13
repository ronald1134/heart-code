import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.6 }
  50% { transform: scale(1.2); opacity: 1 }
  100% { transform: scale(1); opacity: 0.6 }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    color: white;
    `;

    export const Heart = styled.div`
    width: 80px;
    height: 80px;
    background: red;
    transform: rotate(45deg);
    animation: ${pulse} 1.4s infinite;

    &::before,
    &::after {
        content: '';
        width: 80px;
        height: 80px;
        background: red;
        border-radius: 50%;
        position: absolute;
    }

    &::before {
        top: -40px;
        left: 0;
    }

    &::after {
        left: -40px;
        top: 0;
    }
`;
