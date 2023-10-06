import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ApiContext from './ApiContext';
import { FilterProvider } from './Components/Filter/FoodFilter/FilterContext';
function App() {
  const apiKey = '2be95239e7b44028bb20343db19d7bea'
  return (
    <div className="App">
      <BrowserRouter>
        <FilterProvider >
          <ApiContext.Provider value={apiKey}>
            <Routes>

              <Route path="/" element={<HomePage />} />
            </Routes>
          </ApiContext.Provider>
        </FilterProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
