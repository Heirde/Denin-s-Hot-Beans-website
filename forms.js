function validateform(event){
    if (event) {
        event.preventDefault();
    }

    const fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const jobrole = document.getElementById("role").value;
    const phone_number = document.getElementById("phone").value;

    if (fullname === "" || email === "" || jobrole === "" || phone_number === "") {
        alert("Please fill in all fields!");
        return;
    }

    sendEmail();
}

function getValue(id) {
    return document.getElementById(id).value;
}
 
function sendEmail() {
  emailjs.init({ publicKey: "LtSkfYEA6rQ_cnjOb" });
 
  const templateParams = {
    from_name: getValue("name"),
    from_email: getValue("email"),
    message: getValue("message")
  };

  console.log("EmailJS send params:", templateParams);

  emailjs.send("service_ruulq0x", "template_cqxgpav", templateParams)
    .then(function(response) {
      alert("✅ Application Submitted");
    }, function(error) {
      alert("⚠️ Failed to send email. Please try again.");
      console.error("EmailJS error:", error);
    });
}