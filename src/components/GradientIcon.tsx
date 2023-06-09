import styled from 'styled-components';

const BackgroundImage = styled.img`
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 20px;
    filter: blur(36px);
    transform: scale(1.75);
    z-index: 1 !important;
`;

const Container = styled.div`
    width: 96px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;

    & > .fill {
        background: #FFFFFF;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        border-radius: 8px;
    }

    & > img {
        z-index: 3;
    }

    box-shadow: 0px 27px 80px rgba(0, 0, 0, 0.05), 0px 11.28px 33.4221px rgba(0, 0, 0, 0.0359427), 0px 6.0308px 17.869px rgba(0, 0, 0, 0.0298054), 0px 3.38082px 10.0172px rgba(0, 0, 0, 0.025), 0px 1.79553px 5.32008px rgba(0, 0, 0, 0.0201946), 0px 0.747159px 2.21381px rgba(0, 0, 0, 0.0140573);
    border-radius: 8px;
`;

export interface GradientIconProps {
    src: string;
    alt: string;
}

export default function GradientIcon({ src, alt }: GradientIconProps) {
    return (
        <Container>
            <img src={src} alt={alt} width={52} height={52} />
            <div className="fill" />
            <BackgroundImage src={src} alt={alt} width={52} height={52} />
        </Container>
    );
}