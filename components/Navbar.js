import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>Hello {props.name}, learning {props.framework} is fun.</p>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


Navbar.defaultProps = {
    title: 'give title',
    framework: 'react'
}
