import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <React.Fragment>
    <Router>{routes}</Router>
  </React.Fragment>
);

export default App;
