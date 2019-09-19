import React from 'react';
import { Route as BaseRoute, Redirect } from 'react-router-dom';
import { AppLayout } from 'layouts/AppLayout';
import { onlyAuth, onlyGuest } from 'api/utils';

export const AppRoute = ({ component: Component, ...rest }) => (
  <BaseRoute
    {...rest}
    render={props => (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    )}
  />
);

export const AuthRoute = ({ ...params }) =>
  onlyAuth(() => <AppRoute {...params} />, <Redirect to="/login" />);

export const GuestRoute = ({ ...params }) =>
  onlyGuest(() => <AppRoute {...params} />, <Redirect to="/" />);
