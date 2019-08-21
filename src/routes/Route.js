import React from 'react';
import { Route as BaseRoute } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';

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
