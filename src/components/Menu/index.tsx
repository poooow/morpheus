import * as S from './styles'

interface Props {
  setShow: (show: boolean) => void
  items: { id?: string | number | null, name: string, onClick: () => void }[]
  selected?: string | null
}

export default function Menu({ setShow, items, selected = null }: Props) {

  const handleClick = (action: () => void) => {
    action()
    setShow(false)
  }

  return (
    <S.Container>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleClick(item.onClick)} className={item.id === selected ? 'active' : ''}>
            {item.name}
          </li>
        ))}
      </ul>
    </S.Container>
  )
}