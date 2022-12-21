import { $counterStore, decreaseCounter, increaseCounter } from '.'

$counterStore.on(increaseCounter, (counter) => counter + 1)
$counterStore.on(decreaseCounter, (counter) => counter - 1)
