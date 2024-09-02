import { useState, useEffect } from 'react'
import { useData } from '../../context/dbContext'
import { useLocal } from '../../context/localContext'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import * as S from "./styles"
import Markdown from 'react-markdown'
import InputSelectorSwipe from '../../components/inputSelectorSwipe'
import InputSelectorSteps from '../../components/inputSelectorSteps'
import SelectorMenu from '../../components/selectorMenu'

export default function Drug() {
  const { drugList } = useData()
  const { usedDrugs, setUsedDrugs, selectedSelector, setSelectedSelector } = useLocal()
  const { drugId } = useParams()
  const [count, setCount] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const drug = drugList.find((drug: any) => drug.id === drugId)

  useEffect(() => {
    if (!drug || count === 0) return

    if (usedDrugs.find((drug: any) => drug.id === drugId)) {
      setUsedDrugs(usedDrugs.map((item: any) => item.id === drug.id ? { id: drug.id, count, time: Date.now() } : item))
    } else {
      setUsedDrugs([...usedDrugs, { id: drug.id, count, time: Date.now() }])
    }
  }, [count])

  useEffect(() => {
    if (usedDrugs.length) setCount(usedDrugs.find((drug: any) => drug.id === drugId)?.count || 0)
  }, [])

  return (
    <>
      <S.Header>
        <S.HeaderLeft>
          <Link to="/" aria-label="Back">
            <S.BackIcon>
              <FontAwesomeIcon icon={faArrowLeft} />
            </S.BackIcon>
            <div>{drug?.name}</div>
          </Link>
        </S.HeaderLeft>
        <S.MenuIcon onClick={() => setShowMenu(prev => !prev)}><FontAwesomeIcon icon={faEllipsisVertical} /></S.MenuIcon>
        {showMenu && <SelectorMenu setShowMenu={setShowMenu} setSelectedSelector={setSelectedSelector} selectedSelector={selectedSelector}/>}
      </S.Header>
      <S.Main>
        {!drug ? <div>Loading ...</div> :
          <>
            <S.Title>{drug.unit1desc}</S.Title>
            <S.InputContainer>
              <S.Input type="text" name="count" inputMode="numeric" value={count} onChange={(e) => setCount(Number(e.target.value))} min="0" />
              <S.Unit>{drug.unit1}</S.Unit>
              <S.Button onClick={() => setCount(count >= 1 ? count - 1 : 0)}>-</S.Button>
              <S.Button onClick={() => setCount(prev => prev + 1)}>+</S.Button>
            </S.InputContainer>
            {selectedSelector === 'steps' && <InputSelectorSteps count={count} setCount={setCount} />}
            {selectedSelector === 'swipe' && <InputSelectorSwipe count={count} setCount={setCount} />}
            <S.Title>Dávkování</S.Title>
            <S.Result>{Number(count) * drug.factor} {drug.unit2}</S.Result>
            <S.Description><Markdown>{drug.description}</Markdown></S.Description>
          </>
        }
      </S.Main>
    </>
  )
}