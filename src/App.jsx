import { Routes, Route, useNavigate } from 'react-router-dom';

import { Navigation } from "./components/Navigation/Navigation";
import { Catalog } from "./components/Catalog/Catalog";
import { Details } from './components/Details/Details';
import { LogIn } from './components/LogIn/LogIn';
import { Create } from './components/Create/Create';
import { UserProvider } from "./components/Context/userContext"
import { Profile } from './components/Profile/Profile';
import { RouteGuard } from './components/RouteGuard/RouteGuard';


function App() {


  return (
    <>

      <UserProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<LogIn />} />

          <Route path='/create' element={
            <RouteGuard>
              <Create />
            </RouteGuard>
          } />

          <Route path='/details/:apartmentNumber' element={
            <RouteGuard>
              <Details />
            </RouteGuard>
          } />

          {/* <Route path='/login' element={<LogIn />} /> */}

          <Route path='/profile' element={
            <RouteGuard>
              <Profile />
            </RouteGuard>
          } />

          <Route path='/catalog' element={
            <RouteGuard>
              <Catalog />
            </RouteGuard>
          } />

        </Routes>
      </UserProvider>

    </>
  )

}

export default App
