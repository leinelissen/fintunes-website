import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.details`
    border-bottom: 1px solid #eee;
    padding: 24px 0;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 1;
    }

    .icon {
        transition: transform 0.1s ease;
    }

    summary {
        display: flex;
        justify-content: space-between;
        transition: color 0.2s ease;

        &::-webkit-details-marker {
            display:none;
        }
    }

    &[open] {
        opacity: 1;

        summary {
            color: black;
        }

        .icon {
            transform: rotate(180deg);
        }
    }
`;

export interface AnswerProps extends PropsWithChildren {
    question?: string;
}

export default function Answer({ question, children }: AnswerProps) {
    return (
        <Container>
            <summary>
                <span>{question}</span>
                <FontAwesomeIcon className="icon" icon={faArrowDown} />
            </summary>
            {children}
        </Container>
    );
}