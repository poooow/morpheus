import { useState } from 'react'
import * as S from './styles'

interface Props {
  count: number
  setCount: (count: number) => void
}

export default function InputSelectorSwipe({ count, setCount }: Props) {
  const [cypher, setCypher] = useState<number>(0)
  const [firstCypher, setFirstCypher] = useState<number>(0)


  const handleButtonClick = (count: number) => {
    if (cypher === 0) setFirstCypher(count)
    else setCount(firstCypher * 10 + count)
    setCypher((cypher + 1) % 2)
  }

  return (
    <S.Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((count) =>
        <S.Button key={count} onClick={() => handleButtonClick(count)}>
          {cypher === 0 ? `${count}_` : `${firstCypher === 0 ? '' : firstCypher}${count}`}
        </S.Button>
      )}
    </S.Container>
  )
}