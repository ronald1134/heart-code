import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: transform ${({ theme }) => theme.transition},
              box-shadow ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
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
