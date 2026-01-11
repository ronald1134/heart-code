import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  width: 320px;
  text-align: center;
  backdrop-filter: blur(8px);

  h1 {
    margin-bottom: 8px;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 24px;
    opacity: 0.8;
    color: #333;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 10px;
    border: 1px solid #ddd;
  }

  button {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 30px rgba(255, 120, 150, 0.4);
    }
  }
`;
export const Error = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-bottom: 1rem;
    `;