import { useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectTheme } from 'redux/selectors';

function Notification() {
    const dark = useSelector(selectTheme);
    let themeSite = 'colored';

    if (dark) themeSite = 'light';

    return (
        <ToastContainer
            autoClose={2000}
            newestOnTop
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={themeSite}
            transition={Slide}
        />
    );
}

export default Notification;
