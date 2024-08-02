
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeesComponent from './components/ListEmployeesComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HelloWorld from './helloworld'
import AddEmployeeComponent from './components/AddEmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          {/* http://localhost:3000 */}
          {/* <Route path='/' element = { <ListEmployeesComponent/>}></Route> */}
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployeesComponent/>}></Route>
          {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = { <AddEmployeeComponent/>}></Route>
          {/* http://localhost:3000/edit-employee/{employeeid} */}
          <Route path='/edit-employee/:id' element = { <AddEmployeeComponent/> }> </Route>
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
