import PropTypes from 'prop-types'
import Button from './Button'
import { useNavigate } from "react-router-dom";

const Header = ({title, titlealign}) => {

    const navigate = useNavigate();
    
    return (
        <>
            <header className='header' style={{justifyContent: titlealign}}>
                <h1>{title}</h1>
            </header>
        </>
    )
}

Header.defaultProps = {
    title: 'Itinerary System',
    titlealign: 'space-between',
    logout_func: ''
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titlealign: PropTypes.string
}

export default Header
