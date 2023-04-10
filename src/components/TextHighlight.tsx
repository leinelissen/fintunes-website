import styled from 'styled-components';

const TextHighlight = styled.span`
    background-image: -webkit-linear-gradient(53deg, var(--gradient-1), var(--gradient-2));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-variation-settings: "wght" 700;
`;

export default TextHighlight;
