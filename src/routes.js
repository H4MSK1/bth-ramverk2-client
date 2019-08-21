import React from 'react';
import { Switch } from 'react-router-dom';
import { AppRoute } from './routes/Route';
import { IndexPage } from './pages/IndexPage';
import { PageNotFound } from './pages/PageNotFound';

export default (
  <Switch>
    <AppRoute path="/" exact component={IndexPage} />
    <AppRoute path="*" component={PageNotFound} />
  </Switch>
);
