import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ open?: boolean }>`
    border-bottom: 1px solid #eee;
    padding: 24px 0;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 1;
    }

    .icon {
        transition: transform 0.2s ease;
    }

    ${({ open }) => open && css`
        opacity: 1;
    `}
`;

const Question = styled(Disclosure.Button)`
    display: flex;
    justify-content: space-between;
    transition: color 0.2s ease;
    width: 100%;
    font-size: inherit;
    border: 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

const Panel = styled(Disclosure.Panel)`
    padding-top: 16px;
`;

const Animated = styled(Transition)`
    transition: transform 0.2s ease, opacity 0.2s ease;

    &.enterFrom, &.leaveTo {
        transform: translateY(-30%) scaleY(0.7);
        opacity: 0;
    }

    &.leaveFrom, &.enterTo {
        transform: translateY(0%) scaleY(1);
        opacity: 1;
    }
`;

export interface AnswerProps extends PropsWithChildren {
    question?: string;
}

export default function Answer({ question, children }: AnswerProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <Container open>
                    <Question>
                        <span>{question}</span>
                        <FontAwesomeIcon className="icon" icon={faArrowDown} rotation={open ? 180 : undefined} />
                    </Question>
                    <Animated
                        enterFrom="enterFrom"
                        enterTo="enterTo"
                        leaveFrom="leaveFrom"
                        leaveTo="leaveTo"
                        
                    >
                        <Panel>
                            {children}
                        </Panel>
                    </Animated>
                </Container>
            )}
        </Disclosure>
    );
}