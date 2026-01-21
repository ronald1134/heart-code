import styled from 'styled-components';

/* ===== CONTAINER PRINCIPAL ===== */
export const Container = styled.main`
  padding: 4rem 3rem;
  background: ${({ theme }) => theme.colors.background};

  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;

  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

/* ===== SIDEBAR (COLUNA ESQUERDA) ===== */
export const Sidebar = styled.aside`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  backdrop-filter: blur(14px);
  border-radius: 2rem;
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
`;

/* ===== GRID DE CARDS ===== */
export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* ===== FOOTER NO PARALLAX FINAL ===== */
export const Footer = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  span {
    opacity: 0.85;
  }
`;
