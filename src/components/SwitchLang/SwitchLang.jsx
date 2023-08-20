import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from 'redux/rootSlice';
import { selectLang } from 'redux/selectors';
import { StyledOption, StyledSwitchLang } from './SwitchLang.styled';

function SwitchLang() {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);

    return (
        <StyledSwitchLang
            onChange={e => dispatch(changeLang(e.target.value))}
            name="lang"
            value={lang}
        >
            <StyledOption value={'en'}>ENG</StyledOption>
            <StyledOption value={'ua'}>УКР</StyledOption>
        </StyledSwitchLang>
    );
}

export default SwitchLang;
