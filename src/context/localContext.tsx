import { createContext, useState, useContext, useEffect } from 'react'

const LocalContext = createContext<any>({})

const LocalContextProvider = ({ children }: any) => {
  const [usedDrugs, setUsedDrugs] = useState<any>([])

  useEffect(() => {
    if (usedDrugs.length) {
      localStorage.setItem('usedDrugs', JSON.stringify(usedDrugs));
    }
  }, [usedDrugs]);

  useEffect(() => {
    const storedDrugs = localStorage.getItem('usedDrugs');
    if (storedDrugs) {
      setUsedDrugs(JSON.parse(storedDrugs));
    }
  }, []);

  return (
    <LocalContext.Provider value={{ usedDrugs, setUsedDrugs }}>
      {children}
    </LocalContext.Provider>
  )
}

const useLocal = () => {
  return useContext(LocalContext);
};

export {LocalContextProvider, useLocal}