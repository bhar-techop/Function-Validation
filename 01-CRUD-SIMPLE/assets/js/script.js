let fullName = document.getElementById('fullName');
let empCode = document.getElementById('empCode');
let salary = document.getElementById('salary');
let city = document.getElementById('city');
let span = document.getElementById('fullNameValidationError');
let employeeList = document.getElementById('employeeList');

function validateFullName() {
    let isValidate = true;

    
    if (fullName.value=== '') {
        isValidate = false;
        span.classList.remove("hide");
    } else {
      
        if (!span.classList.contains("hide")) {
            isValidate = true;
            span.classList.add("hide");
        }
    }

    return isValidate;
}
let selectedRow=null;
//submit  the records
function submitHandler(event) {
    event.preventDefault();
  
    if (validateFullName()) { 
        let formData=readFormData()

        if(selectedRow===null){
            insertedRecord(formData)
        }
        else{
            updatedRecord(formData)
        }
    } 
}

// Insert new record into the table
function insertedRecord(newUser) {
    let tbody = employeeList.getElementsByTagName("tbody")[0]; // Correct reference to 'employeeList'

    // Insert a new row at the end of the tbody
    let newRow = tbody.insertRow();

    // Insert actual values into each cell of the new row
    newRow.insertCell(0).innerHTML = "fullName";
    newRow.insertCell(1).innerHTML = "empCode";
    newRow.insertCell(2).innerHTML = "salary";
    newRow.insertCell(3).innerHTML = "city";

    // Add Edit and Delete buttons in the last column
    newRow.insertCell(4).innerHTML = `
        <button type='button' onclick='editUser(this)'>Edit</button>
        <button type='button' onclick='deleteUser(this)'>Delete</button>
    `;
}

//Edit User
function editUser(element){
    // console.log(element)
    selectedRow=element.parentElement.parentElement
    // console.log(selectedRow);
    
}
//read the data from the form field
function readFormData(){ 
    // key:value=>property
    let formData={}
    formData.fullName=fullName.value
    formData["empCode"]=empCode.value
    formData["salary"]=salary.value
    formData.city=city.value

    //we want to clear the form it contains previous data
    formData.fullName=""
    formData.empCode=""
    formData.salary=""
    formData.city=""
    return formData
}
