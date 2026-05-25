import React, { useEffect, useState} from "react";
import EmployeeService from "../Services/EmployeeService";

function Employee(){

    const [employees, setEmployees] = useState([]);

    const [emp, setEmp] = useState({
        name: "",
        department: "",
        salary: ""
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        EmployeeService.getAll().then(res => {
            setEmployees(res.data);
        })
    };

    const handleChange = (e) => {
        setEmp({  ...emp, [e.target.name]: e.target.value });
    };

    const save = (e) => {
        e.preventDefault();

        if(editId){
            EmployeeService.update(editId, emp).then(() => {
                loadEmployees();
            })
        } else {
            EmployeeService.create(emp).then(() => {
                loadEmployees();
                reset();
            });
        }
    };

    const edit = (e) => {
        setEmp(e);
        setEditId(e.id);
    };

    const remove = (id) => {
        EmployeeService.delete(id).then(() => loadEmployees());
    };

    const reset = () => {
        setEmp({ name: "", department: "", salary: ""});
        setEditId(null);
    };

    return (
        <div className="container">

            {/* FORM */}
            <div className = "form-box">
                <h2>Employee Form</h2>

                <form onSubmit={save}>
                    <input
                        name="name"
                        placeholder="Name"
                        value={emp.name}
                        onChange={handleChange}
                    /> <br /><br />

                    <input
                        name="department"
                        placeholder="Department"
                        value={emp.department}
                        onChange={handleChange}
                    /> <br /><br />

                    <input
                        name="salary"
                        placeholder="Salary"
                        value={emp.salary}
                        onChange={handleChange}
                    /> <br /><br />

                    <button type="submit">
                        {editId ? "Update" : "Add"}
                    </button>

                    <button type="button" onClick={reset}>
                        Clear
                    </button>

                </form>
            </div>

            {/* Table */}
            <div className="table-box">
                <h2>Employee List</h2>

                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map(e => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.department}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <button className="edit-bin" onClick={() => edit(e)}>Edit</button>
                                    <button className="edit-bin" onClick={() => remove(e.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Employee;