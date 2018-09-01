import React, { Component } from 'react';
import '../textinputstyles/input.css';

class App extends Component {
    render() {
        return (
            <div className="input-wrapper">
                <div className="input-wrapper-text">
                    <textarea rows="4" cols="50"></textarea>
                </div>
            </div>
        );
    }
}

export default App;