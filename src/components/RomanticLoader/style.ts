import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
`;

export const Heart = styled.div`
  width: 60px;
  height: 60px;
  background: #fff;
  position: relative;
  transform: rotate(-45deg);
  animation: ${pulse} 1.2s infinite ease-in-out;

  &:before,
  &:after {
    content: '';
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
  }

  &:before {
    top: -30px;
    left: 0;
  }

  &:after {
    left: 30px;
    top: 0;
  }
`;

export const Text = styled.p`
  margin-top: 32px;
  font-size: 1.1rem;
  text-align: center;
  color: #4a2c2a;
  animation: ${fadeUp} 1s ease forwards;
`;
