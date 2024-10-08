import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --bg-color: ${(props) =>
					props.theme.bgColor}; //main background of application
        --surface: ${(props) =>
					props.theme.surface};//what goes on the surface of the background
        --primary: ${(props) =>
					props.theme.primary}; //primary color of application
        --secondary: ${(props) =>
					props.theme.secondary}; //secondary color of application
        --on-background:${(props) =>
					props.theme
						.onBackground}; //contrasting color of background (i.e. text)
        --on-surface: ${(props) =>
					props.theme.onSurface}; //contrasing color of surface
        --on-primary: ${(props) =>
					props.theme.onPrimary}; //contrasting color of primary
        --on-secondary: ${(props) =>
					props.theme.onSecondary}; //contrasting color of secondary
    }
    *{
        box-sizing: border-box ;
        color: var(--on-background);
        margin: 0;
        font-family: sans-serif;
        font-weight: 300
    }

    h1, h2{
        margin-bottom: 2rem;
    }
    
    p{
        font-size: 1.5rem ;
        line-height: 2rem ;
    }
`;
