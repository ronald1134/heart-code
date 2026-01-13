import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    color: #fff;
    `;

    export const TimeGrid = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    `;

    export const Box = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem 1.4rem;
    border-radius: 14px;
    min-width: 80px;
    backdrop-filter: blur(8px);

    strong {
        font-size: 1.8rem;
        display: block;
    }

    span {
        font-size: 0.8rem;
        opacity: 0.8;
    }
`;
