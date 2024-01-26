var selectedRow = null;

// show alerts 
function showAlert(massage, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(massage));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear all fields 
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // get form values
    const firstName = document.querySelecto("#firstName").value;
    const lastName = document.querySelecto("#lastName").value;
    const rollNo = document.querySelecto("#rollNo").value;

    if(firstName == "" || lastName == "" || rollNo == "") {
        showAlert("Please fill in all fields!", "danger");
    }
    else if(selectedRow == null) {
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr");

        row. innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
    }
});

// del data 
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});
