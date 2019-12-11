import React from 'react'
import PropTypes from 'prop-types'
 
const Header = ({titulo}) => (
    <div>
        <header>
            <h1 className="text-center mt-4">{titulo}</h1>
        </header>
    </div>
)

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header
