import React from 'react'
import Footer from './Footer'
import Content from './MyContent'
import Header from './Header'
import ContactCard from './ContactCard'
function MyApp() {
    return (
        <div>
            {/* <input type="checkbox" />
            <p>Place Holder Text Here</p>
            <input type="checkbox" />
            <p>Place Holder Text Here</p>
            <input type="checkbox" />
            <p>Place Holder Text Here</p> */}
            <Header />
            <div className="contacts">
                <ContactCard
                    contact = {{name: 'Kitty1', imgUrl: "http://placekitten.com/300/200", phone: '021123456', address: 'jl.jalanan'}}
                    // name= "Kitty1"
                    // imgUrl="http//placekitten.com/300/200"
                    // phone = '021123456'
                    // address = 'jl.jalanan'
                />
            </div>
            <Content />
            <Footer />
        </div>
    )
}

export default MyApp