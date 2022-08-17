import { Button, Text, View } from 'react-native'

import { useAuth } from 'src/context/auth'

export const SettingsScreen = () => {
  const { logout } = useAuth()

  return (
    <View>
      <Text>Settings Screen</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  )
}
