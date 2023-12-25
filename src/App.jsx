import { Routes, Route, useNavigate } from 'react-router-dom';

import { Navigation } from "./components/Navigation/Navigation";
import { Catalog } from "./components/Catalog/Catalog";
import { Details } from './components/Details/Details';
import { LogIn } from './components/LogIn/LogIn';
import { Create } from './components/Create/Create';
import { UserProvider } from "./components/Context/userContext"
import { Profile } from './components/Profile/Profile';


function App() {


  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details/:apartmentNumber' element={<Details />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </UserProvider>

    </>
  )

}

export default App
