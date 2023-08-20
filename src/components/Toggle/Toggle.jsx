import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/rootSlice';
import { selectTheme } from 'redux/selectors';
import { StyledToggle } from './Toggle.styled';

function Toggle() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    function switchTheme() {
        dispatch(changeTheme(!theme));
        document.body.classList.toggle('dark');
    }

    return (
        <StyledToggle>
            <input
                type="checkbox"
                defaultChecked={theme}
                onClick={switchTheme}
            />
            <span></span>
        </StyledToggle>
    );
}

export default Toggle;
