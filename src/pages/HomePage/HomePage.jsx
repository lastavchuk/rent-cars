import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { selectLang } from 'redux/selectors';
import langOprions from '../../assests/lang/langList';
import sprite from '../../images/sprite.svg';
import homeImg from '../../images/home.webp';
import {
    StyledBlock,
    StyledImg,
    StyledTitle1,
    StyledWrapper,
} from './HomePage.styled';

function HomePage() {
    const lang = useSelector(selectLang);

    return (
        <Container>
            <StyledTitle1>{langOprions.titleMain[lang]}</StyledTitle1>
            <StyledImg width="900" height="600" src={homeImg} alt="Rent cars" />

            <StyledWrapper>
                <StyledBlock>
                    <svg
                        className="center"
                        width="80"
                        height="80"
                        aria-label={langOprions.titleBlock1[lang]}
                    >
                        <use href={sprite + '#icon-flexible'} />
                    </svg>
                    <div className="wrapper-text">
                        <h2>{langOprions.titleBlock1[lang]}</h2>
                        <p>{langOprions.descBlock1[lang]}</p>
                    </div>
                </StyledBlock>

                <StyledBlock>
                    <svg
                        className="center"
                        width="80"
                        height="80"
                        aria-label={langOprions.titleBlock2[lang]}
                    >
                        <use href={sprite + '#icon-hidden'} />
                    </svg>
                    <div className="wrapper-text">
                        <h2>{langOprions.titleBlock2[lang]}</h2>
                        <p>{langOprions.descBlock2[lang]}</p>
                    </div>
                </StyledBlock>

                <StyledBlock>
                    <svg
                        className="center"
                        width="80"
                        height="80"
                        aria-label={langOprions.titleBlock3[lang]}
                    >
                        <use href={sprite + '#icon-guarantee'} />
                    </svg>
                    <div className="wrapper-text">
                        <h2>{langOprions.titleBlock3[lang]}</h2>
                        <p>{langOprions.descBlock3[lang]}</p>
                    </div>
                </StyledBlock>
            </StyledWrapper>
        </Container>
    );
}
export default HomePage;
