import { useTranslation } from 'react-i18next'
import { Button, View } from 'react-native'
import { useStore } from 'effector-react'
import styled from 'styled-components/native'

import { $counterStore, decreaseCounter, increaseCounter } from 'src/store'

export const MainScreen = () => {
  const { t } = useTranslation('main')
  const counter = useStore($counterStore)

  return (
    <View>
      <Title>{t('title')}</Title>

      <Counter>{t('counter', { value: counter })}</Counter>

      <Button title={t('incrementButton')} onPress={() => increaseCounter()} />
      <Button title={t('decrementButton')} onPress={() => decreaseCounter()} />
    </View>
  )
}

const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: 22px;
`

const Counter = styled.Text`
  text-align: center;
  font-size: 24px;
`
