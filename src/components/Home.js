import React from 'react';
import Typing from 'react-typing-animation';

import './Home.css';

class Home extends React.Component {

    state = {
        typeIndex: 0
    };
    tempIndex = this.state.typeIndex;
    roles = [
        'a developer.',
        'a designer.',
        'a tech lover.',
        'hungry.'
    ];
    startDelay = 1900;

    shouldComponentUpdate() {
        if(this.state.typeIndex !== this.tempIndex) {
            return true;
        }
        return false;
    }

    playNext = () => {
        this.startDelay = 100;
        this.tempIndex = (this.tempIndex + 1) % this.roles.length;
        this.setState({typeIndex: this.tempIndex});
        this.tempIndex = this.state.typeIndex;

    }

    typingDone = () => {
        setTimeout(() => {
            this.playNext()
        }, 1900);
    };

    renderInLoop = (startDelay) => {
        const { typeIndex } = this.state;
        return this.roles
            .filter((role, index) => index === typeIndex)
            .map((role) => {
                return (
                    <Typing className={`${this.props.colorTheme} typing-inline typing-font`} cursorClassName={`${this.props.colorTheme}`} speed={30} key={role} startDelay={startDelay} onFinishedTyping={() => {this.playNext()}}>
                        <Typing.Reset count={1} />
                        <span className="self-typed">{role}</span>
                        <Typing.Delay ms={1900} />
                        <Typing.Backspace cursorClassName="typed-cursor" count={role.length}/>
                    </Typing>
                );
            })
    };

    render() {
        return (
            <section name="home">
                <div className="hero">
                    <div className="hero-inner">
                        <h1 className="display-1">
                            <div className={`hero-title ${this.props.colorTheme}`}>
                                <span>&gt;&nbsp;</span>
                                <Typing className={`${this.props.colorTheme} typing-inline typing-font`} startDelay={500} cursorClassName={this.props.colorTheme} speed={30}>
                                    {/* <Typing.Reset count={1}/> */}
                                    <span>Welcome!</span>
                                    <Typing.Delay ms={500} />
                                </Typing> 
                            </div>
                            <div className="hero-description">
                                My name is Michael. I am&nbsp;&nbsp;
                                {this.renderInLoop(this.startDelay)}
                            </div>
                        </h1>
                    </div>
                </div>
            </section>       
        );
    }
};
export default Home;