import Answer from '@/components/Answer';
import Button, { Buttons } from '@/components/Button';
import Container from '@/components/Container';
import FDroidLogo from '@/components/FDroidLogo';
import Footer from '@/components/Footer';
import GradientIcon from '@/components/GradientIcon';
import Hr from '@/components/Hr';
import Menu from '@/components/Menu';
import ReducedWidth from '@/components/ReducedWidth';
import Section from '@/components/Section';
import TextHighlight from '@/components/TextHighlight';
import VerticalSpacing from '@/components/VerticalSpacing';
import { APP_STORE_LINK, DISCORD_LINK, F_DROID_LINK, GITHUB_LINK, GOOGLE_PLAY_LINK, PRIVACY_POLICY_LINK } from '@/utility/links';
import { faAppStoreIos, faDiscord, faGithub, faGoogle, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

const Columns = styled.div<{ reverse?: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: 24px;

    @media (max-width: 450px) {
        flex-direction: ${({ reverse }) => reverse ? 'column-reverse' : 'column'};
        align-items: center;
    }
`;

const Centered = styled.div`
    text-align: center;
`;

export default function Landing() {
    return (
        <div>
            <Menu />
            <Container>
                <Section style={{ paddingTop: 64 }}>
                    <Columns reverse>
                        <VerticalSpacing gap={32} style={{ position: 'relative', zIndex: 2 }}>
                            <h1>Unleash your Jellyfin audio library, <TextHighlight>anywhere.</TextHighlight></h1>
                            <p style={{ fontSize: 20 }}>
                                Fintunes is a beautiful, minimalistic and open-source <b>streaming music player</b> for <b>iOS</b> and <b>Android</b>, powered by <b>your own Jellyfin server</b>.
                            </p>
                            <Buttons>
                                <Button
                                    icon={<FontAwesomeIcon icon={faAppStoreIos} />}
                                    href={APP_STORE_LINK}
                                    target="_blank"
                                >
                                    Download on App Store
                                </Button>
                                <Button
                                    icon={<FontAwesomeIcon icon={faGooglePlay} />}
                                    href={GOOGLE_PLAY_LINK}
                                    target="_blank"
                                >
                                    Download on Google Play
                                </Button>
                                <Button
                                    icon={<FDroidLogo />}
                                    href={F_DROID_LINK}
                                    target="_blank"
                                >
                                    Download on F-Droid
                                </Button>
                                <Button
                                    icon={<FontAwesomeIcon icon={faGithub} />}
                                    href={GITHUB_LINK}
                                    target="_blank"
                                >
                                    Open source code
                                </Button>
                            </Buttons>
                        </VerticalSpacing>
                        <div style={{ height: '45vh', marginLeft: '-5vw', zIndex: 0, position: 'relative', aspectRatio: '17 / 20'}}>
                            <Image src="/hero.png" fill alt="Fintunes overview" style={{ objectFit: 'contain' }} />
                        </div>
                    </Columns>
                </Section>
                <Hr />
                <Section>

                    <ReducedWidth>
                        <h2>Stream your own music, from your own Jellyfin server.</h2>
                        <p>With Fintunes, you can stream your full audio library in <b>full quality</b>. List or search through your favourite <b>tracks</b>, <b>albums</b> and <b>playlists</b>.</p>
                    </ReducedWidth>
                    <Image src="/overview.png" width={960} height={570} alt="Various Fintunes screens" style={{ width: '100%', height: 'auto' }} />
                </Section>
                <Hr>PACKED WITH AWESOME FEATURES</Hr>
                <Section>
                    <Columns>
                        <Centered>
                            <VerticalSpacing>
                                <GradientIcon src="./airplay.svg" />
                                <h3>AirPlay &amp; Chromecast</h3>
                                <p>Stream to speakers and TVs wirelessly via either <b>AirPlay</b> or <b>Chromecast</b>.</p>
                            </VerticalSpacing>
                        </Centered>
                        <Centered>
                            <VerticalSpacing>
                                <GradientIcon src="./download.svg" />
                                <h3>Offline Playback</h3>
                                <p><b>Download your favourite tracks</b> and play them back, even when you are offline.</p>
                            </VerticalSpacing>
                        </Centered>
                        <Centered>
                            <VerticalSpacing>
                                <GradientIcon src="./dark-mode.svg" />
                                <h3>Dark Mode</h3>
                                <p>Available in both a dark and a light mode, based on your operating system settings.</p>
                            </VerticalSpacing>
                        </Centered>
                    </Columns>
                </Section>
                <Hr />
                <Section>
                    <VerticalSpacing gap={32}>
                        <h2>Frequently Asked Questions</h2>
                        <p>We try our best to answer the most common questions getting in. If your question isn’t listed here, we probably still have an answer to the question in question. Head over to Discord or our GitHub page in order to get the answers you need!</p>
                        <div>
                            <Answer question="What kind of codecs can Fintunes play back?">
                                <p>All of them?</p>
                            </Answer>
                            <Answer question="Does Fintunes support scrobbling?">
                                <p>All of them?</p>
                            </Answer>
                            <Answer question="Can I select a bitrate or sample rate for streaming playback?">
                                <p>All of them?</p>
                            </Answer>
                            <Answer question="Do you collect any personal information while using this app?">
                                <p>All of them?</p>
                            </Answer>
                            <Answer question="Who makes Fintunes and why? Do you have a business model?">
                                <p>All of them?</p>
                            </Answer>
                            <Answer question="Can I request a feature?">
                                <p>All of them?</p>
                            </Answer>
                            <Answer question="I have an issue while using the app, where do I go?">
                                <p>All of them?</p>
                            </Answer>
                        </div>
                    </VerticalSpacing>
                </Section>
                <Section>
                    <ReducedWidth gap={32}>
                        <h2>Get involved in the Fintunes community!</h2>
                        <p>Fintunes is developed out in the open. We’re always on the lookout for feedback, issues, ideas and suggestions! Have something you’d like to share with the Fintunes community at large? Hit us up on either GitHub or Discord.</p>
                        <Columns style={{ alignItems: "center" }}>
                            <GradientIcon src="github.svg" />
                            <Image
                                src="/app-icon.png"
                                height={128}
                                width={128} 
                                alt="Jellyfin logo"
                                style={{ borderRadius: 8, boxShadow: "0px 27px 80px rgba(0, 0, 0, 0.05), 0px 11.28px 33.4221px rgba(0, 0, 0, 0.0359427), 0px 6.0308px 17.869px rgba(0, 0, 0, 0.0298054), 0px 3.38082px 10.0172px rgba(0, 0, 0, 0.025), 0px 1.79553px 5.32008px rgba(0, 0, 0, 0.0201946), 0px 0.747159px 2.21381px rgba(0, 0, 0, 0.0140573)" }}
                            />
                            <GradientIcon src="discord.svg" />
                        </Columns>
                        <Buttons>
                            <Button
                                icon={<FontAwesomeIcon icon={faGithub} />}
                                href={GITHUB_LINK}
                                target="_blank"
                            >
                                Star Fintunes on GitHub
                            </Button>
                            <Button
                                icon={<FontAwesomeIcon icon={faDiscord} />}
                                href={DISCORD_LINK}
                                target="_blank"
                            >
                                Join the Fintunes Discord server
                            </Button>
                        </Buttons>
                    </ReducedWidth>
                </Section>
            </Container>
            <Footer>
                <Container>
                    <Columns>
                        <div>
                            <p>&copy; Lei Nelissen 2023</p>
                            <p>Fintunes is created and maintained by Lei Nelissen, with a little help and love from <a href="https://bmd.studio" target="_blank">BMD Studio</a>.</p>
                        </div>
                        <div>
                            <Button
                                href={APP_STORE_LINK}
                                target="_blank"
                                icon={<FontAwesomeIcon icon={faAppStoreIos} fixedWidth />}
                            >
                                Download on the App Store
                            </Button>
                            <Button
                                href={GOOGLE_PLAY_LINK}
                                target="_blank"
                                icon={<FontAwesomeIcon icon={faGooglePlay} fixedWidth />}
                            >
                                Download on Google Play
                            </Button>
                            <Button
                                href={F_DROID_LINK}
                                target="_blank"
                                icon={<FDroidLogo />}
                            >
                                Download on F-Droid
                            </Button>
                        </div>
                        <div>
                            <Button
                                href={GITHUB_LINK}
                                target="_blank"
                                icon={<FontAwesomeIcon icon={faGithub} fixedWidth />}
                            >
                                Get the source code on GitHub
                            </Button>
                            <Button
                                href={DISCORD_LINK}
                                target="_blank"
                                icon={<FontAwesomeIcon icon={faDiscord} fixedWidth />}
                            >
                                Join the Discord server
                            </Button>
                            <Button
                                href={PRIVACY_POLICY_LINK}
                                target="_blank"
                                icon={<FontAwesomeIcon icon={faFile} fixedWidth />}
                            >
                                Privacy Policy
                            </Button>
                        </div>
                    </Columns>
                </Container>
            </Footer>
        </div>
    );
}