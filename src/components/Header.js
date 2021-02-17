import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <>
            <h2 style={headingStyle}>{title}</h2>
        </>
    )
}

Header.defaultProps = {
    title:'Welcome ABOARD !'
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }


// ? CSS-in-JS : Don't do that, u good man      c krad
const headingStyle = {
    color:'red',
    background:'yellow'
}

export default Header
