import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import './nav.css';

export default class Nav extends React.Component {
    
    propColor = this.props.colorTheme;
    
    hexColors = {
        green: '#21ce99',
        purple: '#836EEF',
        blue: '#196DEA'
    };
    state = {
        color: '',
        brandColor: this.hexColors[this.propColor]
    };

    hero = document.querySelector(".hero");
    nav = document.querySelector(".navbar-brand");

    componentDidMount() {
        this.hero = document.querySelector(".hero");
        this.nav = document.querySelector(".navbar-brand");
        window.addEventListener('scroll', () => {
            if(window.scrollY > this.hero.clientHeight - this.nav.clientHeight * 5) {
                this.setState({color: this.hexColors[this.propColor], brandColor: 'white'});
            }
            else {
                this.setState({color: '', brandColor: this.hexColors[this.propColor]});
            }
        })
    }

    navbarColor = () => {
        if(window.scrollY > this.hero.clientHeight - this.nav.clientHeight * 5) {
            this.setState({color: this.hexColors[this.propColor]})
        }
        else {
            this.setState({brandColor: this.hexColors[this.propColor]});
        }
    }

    greenTheme = () => {
        this.propColor = 'green';
        this.navbarColor();
        this.props.green();
    }
    purpleTheme = () => {
        this.propColor = 'purple';
        this.navbarColor();
        this.props.purple();
    }
    blueTheme = () => {
        this.propColor = 'blue';
        this.navbarColor();
        this.props.blue();
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top container py-3" style={{backgroundColor: this.state.color}}>
                <Link className="navbar-brand cursor-pointer" to="home" smooth><i className="fas fa-battery-full" style={{color: this.state.brandColor}} ></i></Link>
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