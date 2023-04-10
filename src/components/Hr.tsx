import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    color: #999;

    & > span {
        flex: 1 0 auto;
    }
`;

const Rule = styled.hr`
    display: block;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    flex: 1 1 auto;
`;

export default function Hr({ children }: PropsWithChildren) {
    if (children) {
        return (
            <Container>
                <Rule />
                <span>{children}</span>
                <Rule />
            </Container>
        )
    }

    return <Rule />;
}