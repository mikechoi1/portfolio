import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import './nav.css';

export default class Nav extends React.Component {
    state = {
        color: ''
    };
    propColor = this.props.colorTheme;
    hexColors = {
        green: '#21ce99',
        purple: '#836EEF',
        blue: '#196DEA'
    };

    hero = document.querySelector(".hero");
    nav = document.querySelector(".navbar");

    componentDidMount() {
        this.hero = document.querySelector(".hero");
        this.nav = document.querySelector(".navbar");
        window.addEventListener('scroll', () => {
            if(window.scrollY > this.hero.clientHeight - this.nav.clientHeight * 3) {
                this.setState({color: this.hexColors[this.propColor]})
            }
            else {
                this.setState({color: ''})
            }
        })
    }

    greenTheme = () => {
        this.propColor = 'green';
        if(window.scrollY > this.hero.clientHeight - this.nav.clientHeight * 3) {
            this.setState({color: this.hexColors[this.propColor]})
        }
        this.props.green();
    }
    purpleTheme = () => {
        this.propColor = 'purple';
        if(window.scrollY > this.hero.clientHeight - this.nav.clientHeight * 3) {
            this.setState({color: this.hexColors[this.propColor]})
        }
        this.props.purple();
    }
    blueTheme = () => {
        this.propColor = 'blue';
        if(window.scrollY > this.hero.clientHeight - this.nav.clientHeight * 3) {
            this.setState({color: this.hexColors[this.propColor]})
        }
        this.props.blue();
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top container py-3" style={{backgroundColor: this.state.color}}>
                <Link className="navbar-brand cursor-pointer" to="home" smooth><i className="fas fa-battery-full"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link cursor-pointer" to="projects" spy activeClass="active" smooth offset={-72}>Projects<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link cursor-pointer" to="contact" spy activeClass="active" smooth offset={-72}>Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Color Themes
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <button className="dropdown-item green-theme" onClick={() => this.greenTheme()}></button>
                            <button className="dropdown-item purple-theme" onClick={() => this.purpleTheme()}></button>
                            {/* <div className="dropdown-divider"></div> */}
                            <button className="dropdown-item blue-theme" onClick={() => this.blueTheme()}></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};