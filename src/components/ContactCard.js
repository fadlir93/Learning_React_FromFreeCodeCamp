import React from 'react'

function ContactCard(props) {
    console.log(props)
    return(
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt=""/> 
            <h3 style={{display: props.contact.name ? "block": "none"}}>name : {props.contact.name}</h3>
            <h2 style={{color : props.contact.name ? "red" : "blue"}}>{props.contact.phone}</h2>
            <h2>{props.contact.address}</h2>
        </div>  
    )
}

export default ContactCard