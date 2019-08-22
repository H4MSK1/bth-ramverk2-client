import React from 'react';
import { Switch } from 'react-router-dom';
import { AppRoute } from './routes/Route';
import IndexPage from './pages/IndexPage';
import ReportPage from './pages/ReportPage';
import PageNotFound from './pages/PageNotFound';

export default (
  <Switch>
    <AppRoute path="/" exact component={IndexPage} />
    <AppRoute path="/reports/week/:kmom" component={ReportPage} />
    <AppRoute path="*" component={PageNotFound} />
  </Switch>
);
