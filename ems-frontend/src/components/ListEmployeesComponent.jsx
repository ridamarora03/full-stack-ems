import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const ListEmployeesComponent = () => {

    ///const [stateVarName, fundtionThatUpdatesStateVar] = useState([]) //this hook takes initial value of state var, empty array
    // Initialize the state variable `employees` with an empty array
    const [employees, setEmployees] = useState([]);

    // useEffect to fetch employee data when the component mounts
    useEffect(() => {
        getAllEmployees();
        
    }, []); // Empty dependency array means this effect runs once after the initial render

    function getAllEmployees(){
        listEmployees()
            .then(response => {
                setEmployees(response.data); // Update the state with the fetched data
            })
            .catch(error => {
                console.error(error); // Log any errors to the console
            });
    }


    // const dummyData = [
    //     {
    //         "id": 1,
    //         "firstName":"Rianshi",
    //         "lastName":"Arora",
    //         "email":"ria@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "firstName":"Dubu",
    //         "lastName":"Walia",
    //         "email":"riuha@gmail.com"
    //     },
    //     {
    //         "id": 3,
    //         "firstName":"Budu",
    //         "lastName":"Arora",
    //         "email":"buria@gmail.com""
    //     }
    // ] display response of API instead of dummy data // uske liye we need what is known as "STATE VARIABLE" in order to define them we need ""STATE HOOKS"
  
    const navigator = useNavigate();

    
    function addNewEmployee(){
        //function body
        navigator('/add-employee')

    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then( (response) => {
            getAllEmployees();

        }).catch(error => {
                console.error(error); // Log any errors to the console
            })
    }

    return (
    <div className='container'>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add New Employee</button>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    { <th> Employee ID</th>  /*the key attribute is set to employee.id to provide a unique identifier for each row, which helps React optimize rendering. */}
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email ID</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                {employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                
                                <button className='btn btn-danger' style={{marginLeft: '10px'}} onClick={() => removeEmployee(employee.id)}>delete</button>
                            </td>

                        </tr>
                    )}
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeesComponent