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

function submitHandler(event) {
    event.preventDefault();
    if (validateFullName()) { 
        alert("Validated");
    } else {
        alert("Not validated");
    }
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