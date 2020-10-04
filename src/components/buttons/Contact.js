import React from 'react'

import {Link} from 'react-router-dom'

import github from '../../assets/contact/github.svg'
import twitter from '../../assets/contact/twitter.svg'
//import gmail from '../../assets/contact/gmail.svg'

const Contact = (props) => {
    return(
        <div className={props.className}>         
            <Link to="/contact">
                <button className={props.aclass}>NamesRunOut@gmail.com</button>
            </Link>
            <a className={props.aclass} href="https://github.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
            <a className={props.aclass} href="https://twitter.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
        </div>
    )
}

export default Contact