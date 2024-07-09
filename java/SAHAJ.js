document.addEventListener('DOMContentLoaded',() =>

    {
        const addform = document.getElementById('Addform');
        const Editform = document.getElementById('Editform');
        const studentTable = document.querySelector('.Student-form');
    
    let students = [];

    console.log(students);
    
    let EditIndex = -1;
    
    addform.addEventListener('submit', (e) => {
        e.preventDefault();
        const newStudent = {
            name:addform.StudentAddName.value,
            age:addform.StudentAddAge.value,
            phoneNo:addform.StudentAddPhoneNO.value,
            address:addform.StudentAddAddress.value,
        };
        students.push(newStudent)
        addform.reset()
        renderTable();
    })
    
    
    Editform.addEventListener('submit',(e) => {
        e.preventDefault();
        const updateStudent = {
            name:Editform.StudentEditName.value,
            age:Editform.StudentEditAge.value,
            phoneNo:Editform.StudentEditPhoneNO.value,
            address:Editform.StudentEditAddress.value,
        };
        
        students[EditIndex] = updateStudent;
        EditIndex = -1
        Editform.reset()
        renderTable()
    })
    
      const renderTable = () => {
        const tableHTML = `
            <table border = "25px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>PhoneNo</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${students.map((student , index) => `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                        <td>${student.phoneNo}</td>
                        <td>${student.address}</td>
                        <td>
                            <button onclick='editStudent(${index})'>Edit</button>
                            <button onclick='deleteStudent(${index})'>Delete</button>
                        </td>
                    </tr>
                    `).join('')}
                </tbody>           
            </table>
        `;
        studentTable.innerHTML = tableHTML;
    }
    
    window.editStudent =(index) => {
        EditIndex = index;
        const student = students[index];
        Editform.StudentEditName.value = student.name
        Editform.StudentEditAge.value = student.age
        Editform.StudentEditPhoneNO.value = student.phoneNo
        Editform.StudentEditAddress.value = student.address
    }
    
    window.deleteStudent = (index) => {
        students.splice(index , 1);
        renderTable();
    }
    
    })
        