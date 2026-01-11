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
    }

    @media (max-width: 768px) {
        background-attachment: scroll;
    }
`;
