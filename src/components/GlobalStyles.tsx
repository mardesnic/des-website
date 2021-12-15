import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: 'Consolas', sans-serif;
}
@keyframes slideInFromTop{
    from {
        opacity:0;
        transform:translateY(-100px);
        display:none;
    }
    to{
        opacity:1;
        transform:translateY(0);
        display:block;
    }
}
@keyframes slideInFromBottom{
    from {
        opacity:0;
        transform:translateY(100px);
        display:none;
    }
    to{
        opacity:1;
        transform:translateY(0);
        display:block;
    }
}
@keyframes slideInFromLeft{
    from {
        opacity:0;
        transform:translateX(-100px);
        display:none;
    }
    to{
        opacity:1;
        transform:translateY(0);
        display:block;
    }
}
@keyframes slideInFromRight{
    from {
        opacity:0;
        transform:translateX(100px);
        display:none;
    }
    to{
        opacity:1;
        transform:translateY(0);
        display:block;
    }
}
`;
