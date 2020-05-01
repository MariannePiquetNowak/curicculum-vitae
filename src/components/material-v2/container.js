import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import Navbar from './navbar';
import Redirect from './shared/redirect';

const styles = {
    root: {
        backgroundColor: '#5b5a5a'
    }
}

class ContainerMaterial extends Component {
    render() {
        return (
            <Box 
                className={this.props.classes.root}
                width="60%"
                height={1}
                padding={3}
                margin={.5}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
            >
                <Redirect />
                Bienvenue sur la v2 !
                <Navbar />
            </Box>
        )
    }
};


export default withStyles(styles)(ContainerMaterial);