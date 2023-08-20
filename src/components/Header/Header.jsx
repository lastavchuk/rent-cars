import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import langOprions from '../../assests/lang/langList';
import { useSelector } from 'react-redux';
import { selectLang } from 'redux/selectors';
import Toggle from 'components/Toggle/Toggle';
import SwitchLang from 'components/SwitchLang/SwitchLang';

function Header() {
    const lang = useSelector(selectLang);

    return (
        <StyledHeader>
            <Container>
                <div className="header-wrapper">
                    <nav>
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/">
                                    {langOprions.homePage[lang]}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/catalog">
                                    {langOprions.catalogPage[lang]}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/favorites">
                                    {langOprions.favoritesPage[lang]}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="right-bar">
                        <Toggle />
                        <SwitchLang />
                    </div>
                </div>
            </Container>
        </StyledHeader>
    );
}

export default Header;
