import React, { Component } from 'react';


import Navbar from './navbar';
import Redirect from './shared/redirect';


class ContainerMaterial extends Component {
    render() {
        return (
            <div>
                <Redirect />
                Bienvenue sur la v2 !
                <Navbar />
            </div>
        )
    }
};


export default ContainerMaterial;