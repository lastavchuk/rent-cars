import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import SwitchLang from './SwitchLang';
import langOprions from '../../assests/lang/langList';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectTheme } from 'redux/selectors';
import { changeTheme } from 'redux/rootSlice';

function Header() {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);
    const theme = useSelector(selectTheme);

    function darkTheme() {
        dispatch(changeTheme(!theme));
        document.body.classList.toggle('dark');

        // if (themeToggle.checked) {
        //     document.body.classList.add('dark');
        //     localStorage.setItem('theme', 'dark');
        //     return;
        // }
        // document.body.classList.remove('dark');
        // localStorage.setItem('theme', 'light');
    }

    return (
        <StyledHeader>
            <Container>
                <div className="header-wrapper">
                    <nav className="main-nav">
                        {/* <NavLink to="/" className="logo">
                        Logo
                    </NavLink> */}
                        <ul className="site-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="link">
                                    {langOprions.homePage[lang]}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/catalog" className="link">
                                    {langOprions.catalogPage[lang]}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/favorites" className="link">
                                    {langOprions.favoritesPage[lang]}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="right-bar">
                        <span onClick={darkTheme}>dark</span>
                        <SwitchLang />
                    </div>
                </div>
            </Container>
        </StyledHeader>
    );
}

export default Header;
