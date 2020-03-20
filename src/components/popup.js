import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popup-content">
                    <h1>Vous avez choisi Marianne Piquet-Nowak</h1>
                    <div className="contact">
                        <h4>Mail</h4>
                        <a href='mailto:mariannexpiquet@gmail.com'>mariannexpiquet@gmail.com</a>
                        <h4>Téléphone</h4>
                        <a href='tel:+330750046765'>07.50.04.67.65</a>
                        <a href="https://www.linkedin.com/in/marianne-piquet-nowak/">Linkedin</a>
                        <a href="https://www.marianne-piquet-nowak">Site web</a>
                        <h4>Autre :</h4>
                        <ul>
                            <li>Habite Brie-Comte-Robert</li>
                            <li>Permis A & B</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;