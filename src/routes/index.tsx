import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthRouter from './auth.routes';
import AppRouter from './app.routes';
import { useAuth } from '../hooks/auth';

function Router() {
  const { user } = useAuth();

  console.log(user);

  return (
    <NavigationContainer>
      {user.id ? <AppRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
}

export default Router;
