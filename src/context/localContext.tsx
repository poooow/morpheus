import { createContext, useState, useContext, useEffect } from 'react'
import { type Selector } from '../components/selectorMenu'

interface ContextProps {
  usedDrugs: any
  setUsedDrugs: (usedDrugs: any) => void
  selectedSelector: Selector
  setSelectedSelector: (selectedSelector: Selector) => void
}

const LocalContext = createContext<ContextProps>({
  usedDrugs: [],
  setUsedDrugs: () => { },
  selectedSelector: null,
  setSelectedSelector: () => { }
})

const LocalContextProvider = ({ children }: any) => {
  const [usedDrugs, setUsedDrugs] = useState<any>([])
  const [selectedSelector, setSelectedSelector] = useState<Selector>(null)

  useEffect(() => {
    if (usedDrugs.length) localStorage.setItem('usedDrugs', JSON.stringify(usedDrugs))
    if (selectedSelector) localStorage.setItem('selectedSelector', JSON.stringify(selectedSelector))

  }, [usedDrugs, selectedSelector])

  useEffect(() => {
    const storedDrugs = localStorage.getItem('usedDrugs')
    if (storedDrugs) setUsedDrugs(JSON.parse(storedDrugs))

    const selectedSelector = localStorage.getItem('selectedSelector')
    if (selectedSelector) setSelectedSelector(JSON.parse(selectedSelector))
  }, [])

  return (
    <LocalContext.Provider value={{ usedDrugs, setUsedDrugs, selectedSelector, setSelectedSelector }}>
      {children}
    </LocalContext.Provider>
  )
}

const useLocal = () => {
  return useContext(LocalContext)
}

export { LocalContextProvider, useLocal }
