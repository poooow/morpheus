import { createContext, useState, useContext, useEffect } from 'react'
import { fetchDrugList } from '../helpers/db'
import { useLocal } from './localContext'

const DbContext = createContext<any>({})

const DbContextProvider = ({ children }: any) => {
  const { usedDrugs } = useLocal()
  const [drugList, setDrugList] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setDrugList(await fetchDrugList())
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (!usedDrugs) return

    // Sort used drugs by last used time
    const usedDrugsSorted = usedDrugs.sort((a: any, b: any) =>
      usedDrugs.find((drug: any) => drug.id === b.id)?.time -
      usedDrugs.find((drug: any) => drug.id === a.id)?.time
    )

    const drugListTop: any = []
    let drugListBottom = [...drugList]

    // 
    usedDrugsSorted.forEach((usedDrug: any) => {
      const drug = drugListBottom.find((drug: any) => drug.id === usedDrug.id)
      if (drug) {
        drugListBottom = drugListBottom.filter((d: any) => d.id !== drug.id)
        drugListTop.push(drug)
      }
    })

    setDrugList([...drugListTop, ...drugListBottom])
  }, [usedDrugs])

  return (
    <DbContext.Provider value={{ drugList, setDrugList, loading }}>
      {children}
    </DbContext.Provider>
  )
}

const useData = () => {
  return useContext(DbContext)
}

export { DbContextProvider, useData }