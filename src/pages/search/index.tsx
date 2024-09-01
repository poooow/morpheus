import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"
import { useData } from '../../context/dbContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'

export default function Search() {
  const { drugList } = useData()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const queryParam = searchParams.get("search") ?? ""
    setQuery(queryParam)
  }, [])

  const resultFilter = (drug: any) => drug.name !== "" && ((drug.name.toLowerCase().includes(query.toLowerCase())) || drug.keywords?.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  return (
    <>
      <S.Header>
        <S.SearchIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></S.SearchIcon>
        <input type="text" name="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Název léku" />
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
    </>
  )
}