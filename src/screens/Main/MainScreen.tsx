import { View } from 'react-native'
import styled from 'styled-components/native'

export const MainScreen = () => (
  <View>
    <Title>Main Screen</Title>
  </View>
)

const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: 22px;
`
