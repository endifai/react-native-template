import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from 'src/context/auth'

import { RootNavigator } from './navigation'

export const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  </NavigationContainer>
)
