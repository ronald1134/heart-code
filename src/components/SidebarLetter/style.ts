import styled, { keyframes } from 'styled-components';

const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.aside`
  position: static;
  top: 120px;
  right: 40px;
  height: 500px;

  max-width: 280px;
  padding: 2.4rem;
  border-radius: 28px;

  cursor: pointer;
  user-select: none;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);

  color: #fff;

  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.45),
      inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Badge = styled.span`
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ff4d6d;
  margin-bottom: 1.2rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.95;
  animation: ${fadeSlide} 0.6s ease;
`;

export const Hint = styled.span`
  display: block;
  margin-top: 1.6rem;
  font-size: 0.75rem;
  opacity: 0.6;
  text-align: right;
`;
