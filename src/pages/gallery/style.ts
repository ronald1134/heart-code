import styled, { keyframes } from "styled-components";

/* ===== FUNDO ===== */
export const Container = styled.main`
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  h1 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

/* ===== GRID ===== */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

/* ===== CARD ===== */
export const ImageCard = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition:
      transform 0.6s ease,
      filter 0.6s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
`;

/* ===== CORAÇÕES ===== */
const float = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) scale(1.5);
    opacity: 0;
  }
`;

export const Hearts = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before,
  &::after {
    content: "❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️";
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    animation: ${float} 10s linear infinite;
  }

  &::after {
    animation-duration: 14s;
    opacity: 0.5;
  }
`;
