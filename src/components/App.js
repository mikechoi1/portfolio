import React from 'react';

import Nav from './header/nav';
import Home from './Home';
import Projects from './projects/projects';
import projects from '../content/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';

import './App.css';

class App extends React.Component {
    state = {
        colorTheme: 'green'
    };

    greenTheme = () => {
        this.setState({colorTheme: 'green'});
    }
    purpleTheme = () => {
        this.setState({colorTheme: 'purple'});
    }
    blueTheme = () => {
        this.setState({colorTheme: 'blue'});
    }
    
    render() {
        return (
            <div className="container">
                <Nav colorTheme={this.state.colorTheme} green={this.greenTheme} purple={this.purpleTheme} blue={this.blueTheme}/>
                <Home colorTheme={this.state.colorTheme}/>
                <Projects projects={projects} colorTheme={this.state.colorTheme}/>
                <Contact colorTheme={this.state.colorTheme}/>
                <Footer />
            </div>
        );
    }
};
export default App;