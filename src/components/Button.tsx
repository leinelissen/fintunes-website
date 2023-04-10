import { PropsWithChildren, ReactNode } from 'react';
import styled, { StyledComponentProps } from 'styled-components';

export const Buttons = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.a`
    background-color: #fbfbfb;
    color: var(--primary);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 20px;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
        background-color: #f6f6f6;
    }
`;

export interface ButtonProps extends PropsWithChildren, StyledComponentProps<"a", any, {}, never> {
    icon?: ReactNode;
}

export default function Button({ icon, children, ...props }: ButtonProps) {
    return (
        <ButtonContainer {...props}>
            {icon}
            <span>{children}</span>
        </ButtonContainer>
    );
}