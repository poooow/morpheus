import * as S from './styles'


export type Selector = 'swipe' | 'steps' | null
interface Props {
  setShowMenu: (show: boolean) => void
  selectedSelector: string | null
  setSelectedSelector: (selector: Selector) => void
}

export default function SelectorMenu({ setShowMenu, selectedSelector, setSelectedSelector }: Props) {

  const handleClick = (selector: Selector) => {
    setSelectedSelector(selector)
    setShowMenu(false)
  }

  return (
    <S.Container>
      <ul>
        <li onClick={() => handleClick('swipe')} className={selectedSelector === 'swipe' ? 'active' : ''}>Výběr swipe</li>
        <li onClick={() => handleClick('steps')} className={selectedSelector === 'steps' ? 'active' : ''}>Výběr po krocích</li>
        <li onClick={() => handleClick(null)} className={selectedSelector === null ? 'active' : ''}>Skrýt výběr</li>
      </ul>
    </S.Container>
  )
}