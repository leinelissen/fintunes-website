import styled from 'styled-components';
import { ButtonContainer } from './Button';

const Footer = styled.footer`
    background-color: #FBFBFB;
    padding: 48px 0;
    font-size: 14px;

    ${ButtonContainer} {
        background-color: transparent;
        padding: 0;
        margin-bottom: 16px;

        &:hover {
            background-color: transparent;
        }
    }
`;

export default Footer;
