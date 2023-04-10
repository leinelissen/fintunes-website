import styled from 'styled-components';

const VerticalSpacing = styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => `${gap || 16}px`};
`;

export default VerticalSpacing;
