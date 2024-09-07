import { useState } from 'react'
import * as S from './styles'

interface Props {
  count: number
  setCount: (count: number) => void
}

export default function InputSelectorSwipe({ count, setCount }: Props) {
  const [power, setPower] = useState<number>(0)
  const [firstPower, setFirstPower] = useState<number>(0)


  const handleButtonClick = (count: number) => {
    if (power === 0) {
      setFirstPower(count)
      setCount(count)
    }
    else {
      setCount(firstPower * 10 + count)
    }
    setPower((power + 1) % 2)
  }

  return (
    <S.Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((count) =>
        <S.Button key={count} onClick={() => handleButtonClick(count)}>
          {power === 0 ? `${count}_` : `${firstPower === 0 ? '' : firstPower}${count}`}
        </S.Button>
      )}
    </S.Container>
  )
}