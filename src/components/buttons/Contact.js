import React from 'react'

import {Link} from 'react-router-dom'

import github from '../../assets/contact/github.svg'
import twitter from '../../assets/contact/twitter.svg'
//import gmail from '../../assets/contact/gmail.svg'

const Contact = () => {
    return(
        <div className="navbar_contact">         
            <Link to="/contact">
                <button className="navbar_button--contact">NamesRunOut@gmail.com</button>
            </Link>
            <a className="navbar_button--contact" href="https://github.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
            <a className="navbar_button--contact" href="https://twitter.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
        </div>
    )
}

export default Contact