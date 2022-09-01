import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import { Navbar, Particles } from './components';
import './App.scss';

const App = () => {
    return (
        <>
            {/* <Particles /> */}
            <div className="app">
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonial />
                <Footer />
            </div>
        </>
    );
}

export default App