import styled from 'styled-components';

type ParallaxProps = {
    bg: string;
    height?: string;
    overlay?: number;
};

export const Wrapper = styled.section<ParallaxProps>`
    height: ${({ height }) => height || '100vh'};
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, ${({ overlay }) => overlay ?? 0.45});
        pointer-events: none; // 🔥 ISSO AQUI FALTAVA
    }

    @media (max-width: 768px) {
        background-attachment: scroll;
    }
`;

export const Parallax = styled.section<ParallaxProps>`
    height: ${({ height }) => height || '100vh'};
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

&::before {
    content: '';
    position: absolute;
    inset: 0;

    background-image: inherit;
    background-size: inherit;
    background-position: inherit;

    filter: blur(6px) scale(1.05);
    transform-origin: center;
    z-index: 0;

    pointer-events: none; /* ESSENCIAL */
}

&::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;

    pointer-events: none; /* ESSENCIAL */
}

`;

export const Footer = styled.footer`
  position: relative;
  z-index: 2; /* CRUCIAL */

  text-align: center;
  color: #fff;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  span {
    opacity: 0.9;
  }

    .cta-button {
    position: relative;
    z-index: 3; /* GARANTE prioridade */

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
