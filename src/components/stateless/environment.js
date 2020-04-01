import React from 'react';

import '../../assets/styles/environment.scss';


const Environment = () => {
    return (
        <div className="environment-content">
            <ul>
                <li>IDE Visual Studio Code</li>
                <li>Windows / Linux Ubuntu</li>
                <li className="list-environment">Workflow Git :
                    <p>-> Git</p>
                    <p>-> Gitlab</p>
                    <p>-> Github</p>
                    <p>-> Git Flow</p>
                </li>
                <li className="list-environment">
                    Javascript :
                    <p>-> NPM</p>
                    <p>-> Yarn</p>
                    <p>-> Webpack</p>
                </li>
                <li>Client FTP : FileZilla</li>
            </ul>
        </div>
    )
}

export default Environment;