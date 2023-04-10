import styled from 'styled-components';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import FDroidLogo from './FDroidLogo';
import { APP_STORE_LINK, F_DROID_LINK, GITHUB_LINK, GOOGLE_PLAY_LINK } from '@/utility/links';

const FixedBar = styled.div`
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
`;

const DividedColumns = styled(Container)`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    align-items: center;
    height: 64px;
`;

const Icons = styled.div`
    display: flex;
    gap: 16px;

    a {
        color: #000000;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: black;

    img {
        border-radius: 4px;
        box-shadow: 0px 27px 80px rgba(0, 0, 0, 0.05), 0px 11.28px 33.4221px rgba(0, 0, 0, 0.0359427), 0px 6.0308px 17.869px rgba(0, 0, 0, 0.0298054), 0px 3.38082px 10.0172px rgba(0, 0, 0, 0.025), 0px 1.79553px 5.32008px rgba(0, 0, 0, 0.0201946), 0px 0.747159px 2.21381px rgba(0, 0, 0, 0.0140573);
    }
`;

export default function Menu() {
    return (
        <FixedBar>
            <DividedColumns>
                <Logo>
                    <img src="./app-icon.png" height="32" width="32" />
                    <span>Fintunes</span>
                </Logo>
                <Icons>
                    <a
                        href={APP_STORE_LINK}
                        target="_blank"
                        aria-label="Open Fintunes on App Store"
                    >
                        <FontAwesomeIcon icon={faAppStoreIos} />
                    </a>
                    <a
                        href={GOOGLE_PLAY_LINK}
                        target="_blank"
                        aria-label="Open Fintunes on Google Play"
                    >
                        <FontAwesomeIcon icon={faGooglePlay} />
                    </a>
                    <a
                        href={F_DROID_LINK}
                        target="_blank"
                        aria-label="Open Fintunes on F-Droid"
                    >
                        <FDroidLogo />
                    </a>
                    <a
                        href={GITHUB_LINK}
                        target="_blank"
                        aria-label="Open Fintunes on GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Icons>
            </DividedColumns>
        </FixedBar>
    );
}