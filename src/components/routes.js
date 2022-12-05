import { Route, Routes, useLocation } from 'react-router-dom'

//files
import Departments from './pages/departments'
import Students from './pages/students'
import DashBoard from './pages/dashboard'

const Allroutes = () => {

  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path='/departments' element={<Departments />} />
      <Route exact path='/students' element={< Students />} />
      <Route exact path='/dashboard' element={<DashBoard />} />
    </Routes>
  )
}

export default Allroutes
