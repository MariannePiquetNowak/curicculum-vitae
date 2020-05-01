import React from 'react';
import Button from '@material-ui/core/Button';
import {
    Route
} from 'react-router-dom'

const BoutonRedirect = ({ history }) => (
    <Button 
        variant="contained" 
        color="primary" 
        type="button" 
        onClick={() => history.push('/')}>Version 1
    </Button>
  );
  
  const Redirect = () => (
    <Route 
        path="/" 
        render={(props) => 
            <BoutonRedirect {...props} 
            title="Revenir à la version 1985"
            />}
    />
  );

  export default Redirect;