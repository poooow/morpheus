import { memo } from 'react'
import { Link } from "react-router-dom"
import * as S from './styles'

interface ListProps {
  query: string
  drugList: any
}

function DrugList({ query, drugList }: ListProps) {

  console.log('render list')

  const resultFilter = (drug: any) => drug.name !== "" && ((drug.name.toLowerCase().includes(query.toLowerCase())) || drug.keywords?.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  return (
    drugList.filter(resultFilter).length === 0 ? <S.ResultMessage>Žádný lek nenalezen</S.ResultMessage> :
      <ul>
        {
          drugList.filter(resultFilter).map((drug: any) => (
            <li key={drug.id} data-testid={drug.id}><Link to={`/drug/${drug.id}`}>{drug.name}</Link></li>
          ))
        }
      </ul>
  )
}

export default memo(DrugList)