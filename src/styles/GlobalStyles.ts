    import { createGlobalStyle } from 'styled-components';

    export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.main};
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    `;
