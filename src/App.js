import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        ></Route>
        <Route
          path='/catalog'
          element={<div>Каталог</div>}
        ></Route>
        <Route
          path='/album'
          element={<div>Альбом</div>}
        ></Route>
        <Route
          path='/contacts'
          element={<div>Контакты</div>}
        ></Route>
        <Route
          path='/privacy'
          element={<div>Политика конфиденциальности</div>}
        ></Route>
        <Route
          path='/care'
          element={<div>Уход за изделиями</div>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
