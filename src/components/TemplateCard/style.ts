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


export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center center;
  display: block;
  
`;

export const Content = styled.div`
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
  left: 50%;
  bottom: -1rem;
  transform: translateX(-50%) translateY(20px);
  width: 90%;

  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  animation: riseIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
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
