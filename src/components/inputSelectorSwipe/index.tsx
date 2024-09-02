import { useEffect, useRef } from 'react'

import * as S from './styles'

interface Props {
  count: number
  setCount: (count: number) => void
}

export default function InputSelectorSwipe({ count, setCount }: Props) {
  const containerRef = useRef(null)

  const numbers = Array.from({ length: 99 }, (_, i) => i + 1)

  useEffect(() => {
    const countRounded = count >= 99 ? 98 : count
    // @ts-ignore
    containerRef?.current?.children[countRounded].scrollIntoView({ behavior: 'smooth' })
  }, [count])

  return (
    <S.Container ref={containerRef}>
      {numbers.map((count) => <S.Button key={count} onClick={() => setCount(count)}>{count}</S.Button>)}
    </S.Container>
  )
}