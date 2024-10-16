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
import Menu from '../../components/Menu'

export type Selector = 'swipe' | 'steps' | null

export default function Drug() {
  const { drugList } = useData()
  const { usedDrugs, setUsedDrugs, selectedSelector, setSelectedSelector } = useLocal()
  const { drugId } = useParams()
  const [count, setCount] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<Selector>(selectedSelector)

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

  function handleSelectMenuItem(name: Selector) {
    setSelectedMenuItem(name)
    setSelectedSelector(name)
  }

  const menuItems = [
    { id: 'steps', name: 'Výběr po krocích', onClick: () => handleSelectMenuItem('steps') },
    { id: 'swipe', name: 'Výběr swipe', onClick: () => handleSelectMenuItem('swipe')},
    { id: null, name: 'Skrýt výběr', onClick: () => handleSelectMenuItem(null)},
  ]

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
        <S.MenuButton onClick={() => setShowMenu(prev => !prev)}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </S.MenuButton>
        {showMenu && <Menu setShow={setShowMenu} items={menuItems} selected={selectedMenuItem} />}
      </S.Header>
      <S.Main>
        {!drug ? <S.Loading><img src="/piggy-bw.svg" alt="loading" /></S.Loading> :
          <>
            <S.Title>{drug.unit1desc}</S.Title>
            <S.InputContainer>
              <S.Input type="text" name="count" inputMode="numeric" value={count} onChange={(e) => setCount(Number(e.target.value))} min="0" />
              <S.Unit>{drug.unit1}</S.Unit>
              <S.Button onClick={() => setCount(prev => prev >= 1 ? prev - 1 : 0)}>-</S.Button>
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