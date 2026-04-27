function validateform(){

const fullname = document.getElementById("name").value;
const email = document.getElementById("email").value;
const jobrole = document.getElementById("role").value;
const phone_number = document.getElementById("phone").value;

if (fullname === "" || email === "" || jobrole === "---Select a role---" || phone_number === "")  {
    alert("Please fill in all fields!");
}

else{alert("✅Application Submitted")}

}

