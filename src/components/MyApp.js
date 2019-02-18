import React from 'react'
import Footer from './Footer'
import Content from './MyContent'
import Header from './Header'

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
            <Content />
            <Footer />
        </div>
    )
}

export default MyApp