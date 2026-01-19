import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    z-index: 2;

    max-width: 960px;
    padding: 0 1.5rem;

    text-align: center;
    color: #fff;

    animation: fadeUp 0.9s ease both;

    h1 {
        font-size: clamp(2.4rem, 5vw, 3.5rem);
        margin-bottom: 0.75rem;
    }

    h2 {
        font-size: clamp(1.8rem, 4vw, 2.4rem);
        margin-bottom: 0.5rem;
    }

    p,
    span {
        font-size: 1.1rem;
        opacity: 0.95;
    }

    @keyframes fadeUp {
        from {
        opacity: 0;
        transform: translateY(24px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }
`;
