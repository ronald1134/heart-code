import styled from 'styled-components';

type ParallaxProps = {
    bg: string;
    height?: string;
}

// export const Parallax = styled.section<ParallaxProps>`
//   height: ${({ height }) => height || '100vh'};
//   background-image: url(${({ bg }) => bg});
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
export const Parallax = styled.section<ParallaxProps>`
  height: ${({ height }) => height || '100vh'};
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const ParallaxContent = styled.div`
  height: 15rem;

  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  animation: fadeUp 1s ease;

  border: 1px solid red;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  p,
  span {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @keyframes fadeUp {
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

export const Container = styled.main`
  height: 25rem;
  border: 1px solid blue;
  padding: 4rem 3rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export const Footer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
`;