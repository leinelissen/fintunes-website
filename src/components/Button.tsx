import { PropsWithChildren, ReactNode } from 'react';
import styled, { StyledComponentProps, css } from 'styled-components';

export const Buttons = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.a<{ disabled?: boolean, small?: boolean }>`
    background-color: #fbfbfb;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 20px;
    text-decoration: none;
    border-radius: 8px;
    flex-shrink: 0;

    &:disabled {
        color: salmon !important;
    }

    ${({ disabled }) => disabled && css`
        color: #ccc;
        pointer-events: none;
    `}

    ${({ small }) => small && css`
        background-color: transparent;
        padding: 0;
        margin-bottom: 16px;

        &:hover {
            background-color: transparent;
        }
    `}
`;

export interface ButtonProps extends PropsWithChildren, StyledComponentProps<"a", any, {}, never> {
    icon?: ReactNode;
    disabled?: boolean;
    small?: boolean;
}

export default function Button({ icon, children, ...props }: ButtonProps) {
    return (
        <ButtonContainer {...props}>
            {icon}
            <span>{children}</span>
        </ButtonContainer>
    );
}