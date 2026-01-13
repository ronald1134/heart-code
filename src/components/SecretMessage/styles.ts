import styled from 'styled-components';

export const Box = styled.div`
    padding: 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.4s;
    backdrop-filter: blur(8px);

    &:hover {
        transform: scale(1.02);
    }
`;
