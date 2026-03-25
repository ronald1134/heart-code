import styled from 'styled-components';

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

export const Footer = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  span {
    opacity: 0.85;
  }

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.4);

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  cursor: pointer;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  color: #fff;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
  transform: scale(1.07);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}
`;
