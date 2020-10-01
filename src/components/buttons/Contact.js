import React from 'react'

import github from '../../assets/contact/github.svg'
import twitter from '../../assets/contact/twitter.svg'
//import gmail from '../../assets/contact/gmail.svg'

const Contact = (props) => {
    return(
        <div className={props.className}>         
            <a className={props.aclass} href="mailto: namesrunout@gmail.com" target="_blank" rel="noopener noreferrer">NamesRunOut@gmail.com</a>
            <a className={props.aclass} href="https://github.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
            <a className={props.aclass} href="https://twitter.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
        </div>
    )
}

export default Contact