import styled from 'styled-components';

export const Wave = styled.svg`
    display: block;
    width: 100%;
    height: 120px;
    margin-top: -1px;

    path {
        fill: ${({ theme }) => theme.colors.background};
    }

    @media (max-width: 768px) {
        height: 80px;
    }
`;
