import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
    color: #fff;
    animation: fadeUp 1s ease;

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    p,
    span {
        font-size: 1.2rem;
        opacity: 0.9;
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
