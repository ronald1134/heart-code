import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 10;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
type CardProps = {
  isOpen: boolean;
};


export const Card = styled.div<CardProps>`
  position: relative;
  isolation: isolate;
  z-index: ${({ isOpen }) => (isOpen ? 20 : 1)};

  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  cursor: pointer;

  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  will-change: transform;

  ${({ isOpen }) =>
    isOpen &&
    `
      transform: translateY(-20px) rotate(-2deg) scale(1.05);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
    `}

  &:hover {
    transform: translateY(-6px) scale(1.015);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 190px;
  overflow: hidden;
  border-radius: 1.4rem 1.4rem 0 0;
  background: #000;
`;

export const ImageBackground = styled.img`
    position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(12px) brightness(0.7);
  transform: scale(1.2);
`;

export const ImageForeground = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center center;
  display: block;
  
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 1rem;
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.95rem;
  }
`;

export const MessageBox = styled.div`
    position: absolute;
  inset: 0;
  z-index: 5; /* 🔥 chave da correção */

  background: linear-gradient(180deg, #0b0f1a, #070a13);
  border-radius: 1.4rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  color: #fff;
  cursor: pointer;
  animation: fadeIn 0.4s ease;
  span {
    font-size: 1.1rem;
    line-height: 1.6;
    animation: typing 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes typing {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const MessageText = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  animation: fadeSlide 0.4s ease;

  @keyframes fadeSlide {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Hint = styled.small`
  margin-top: 12px;
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;


export const CloseButton = styled.button`
  margin-top: 0.8rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.muted};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
