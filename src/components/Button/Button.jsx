import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export default function Button({
    onClick = null,
    text,
    type = 'button',
    $variant = 'primary',
}) {
    return (
        <StyledButton type={type} onClick={onClick} $variant={$variant}>
            {text}
        </StyledButton>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,
    $variant: PropTypes.string,
};
