import { Routes, Route, HashRouter } from "react-router-dom"
import Search from './pages/search'
import Drug from './pages/drug'
import { DbContextProvider } from "./context/dbContext"
import { LocalContextProvider } from './context/localContext'

function App() {
  return (
    <LocalContextProvider>
      <DbContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path='/drug/:drugId' element={<Drug />} />
          </Routes>
        </HashRouter>
      </DbContextProvider>
    </LocalContextProvider>
  )
}

export default App
