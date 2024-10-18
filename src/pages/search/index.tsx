import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { useData } from '../../context/dbContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Menu from '../../components/Menu'
import ShareModal from '../../components/shareModal'
import List from './List'
import * as S from './styles'

export default function Search() {
  const { drugList, loading } = useData()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState("")
  const [showMenu, setShowMenu] = useState(false)
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    const queryParam = searchParams.get("search") ?? ""
    setQuery(queryParam)
  }, [searchParams])

  const menuItems = [
    { name: "Sdílet aplikaci", onClick: () => setShowQR(true) }
  ]

  return (
    <>
      <S.Header>
        <S.HeaderLeft>
          <S.SearchIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></S.SearchIcon>
          <input type="text" name="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Název léku" size={10} />
        </S.HeaderLeft>
        <S.MenuButton onClick={() => setShowMenu(prev => !prev)} aria-label="menu">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </S.MenuButton>
        {showMenu &&
          <Menu
            setShow={setShowMenu}
            items={menuItems}
          />
        }
      </S.Header>
      <S.Main>
        {loading ? <S.Loading><img src="/piggy-bw.svg" alt="loading" /></S.Loading> :
          <List query={query} drugList={drugList} />
        }
      </S.Main>
      {showQR && <ShareModal hide={() => setShowQR(false)} />}
    </>
  )
}
