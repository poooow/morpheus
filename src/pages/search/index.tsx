import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"
import { useData } from '../../context/dbContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Menu from '../../components/Menu'
import ShareModal from '../../components/shareModal'
import * as S from './styles'

export default function Search() {
  const { drugList } = useData()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState("")
  const [showMenu, setShowMenu] = useState(false)
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    const queryParam = searchParams.get("search") ?? ""
    setQuery(queryParam)
  }, [])

  const resultFilter = (drug: any) => drug.name !== "" && ((drug.name.toLowerCase().includes(query.toLowerCase())) || drug.keywords?.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  const menuItems = [
    { name: "Sdílet aplikaci", onClick: () => setShowQR(true) }
  ]

  return (
    <>
      <S.Header>
        <S.HeaderLeft>
          <S.SearchIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></S.SearchIcon>
          <input type="text" name="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Název léku" size={10}/>
        </S.HeaderLeft>
        <S.MenuIcon onClick={() => setShowMenu(prev => !prev)}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </S.MenuIcon>
        {showMenu &&
          <Menu
            setShow={setShowMenu}
            items={menuItems}
          />
        }
      </S.Header>
      <S.Main>
        {!drugList.length ? <S.Loading>Loading ...</S.Loading> :
          <ul>
            {
              drugList.filter(resultFilter).map((drug: any) => (
                <li key={drug.id}><Link to={`/drug/${drug.id}`}>{drug.name}</Link></li>
              ))
            }
          </ul>}
      </S.Main>
      {showQR && <ShareModal hide={() => setShowQR(false)} />}
    </>
  )
}