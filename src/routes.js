import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { AppRoute, AuthRoute, GuestRoute } from 'routes/Route';
import LoadingPage from 'pages/LoadingPage';

const IndexPage = lazy(() => import('pages/IndexPage'));
const ReportPage = lazy(() => import('pages/ReportPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export default (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      <AppRoute path="/" exact component={IndexPage} />

      <GuestRoute path="/login" component={LoginPage} />

      <GuestRoute path="/register" component={RegisterPage} />

      <AuthRoute path="/me" component={null} />

      <AppRoute path="/reports/week/:kmom" component={ReportPage} />

      <AppRoute path="*" component={PageNotFound} />
    </Switch>
  </Suspense>
);
