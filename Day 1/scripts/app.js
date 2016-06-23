/**
 * Created by Aurel on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class="table table-hover" border="1">' +
                  '<tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th>' +
                    '<th>Vizualizare</th><th>Stergere</th></tr>';
    var row;
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+
                '</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+
                '</td>';
        row = ' '+employeesList[i].firstName+', '+employeesList[i].lastName+
              ', '+employeesList[i].phone+', '+employeesList[i].salary;
        myTable += '<td><button onclick="show(\''+row+'\')">Vizualizare</button></td>'
        myTable += '<td><button onclick="removeEmployee('+i+', 1)">Stergere</button></td></tr>';


    }
    myTable+='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function removeEmployee(position, nrofelem) {
    employeesList.splice(position, nrofelem);
    showList();
}

function salaryTotal() {
    var TOTAL = 0;
    for(var i in employeesList) {
        TOTAL += employeesList[i].salary;
    }
    var myTable = '<table class="table table-hover" border="1"><tr><td>'+TOTAL+'</td></tr></table>';
    var container = document.getElementById('salarycontainer');
    container.innerHTML = myTable;
}

function show(row) {alert(row);}