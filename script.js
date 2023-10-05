    function message() {
            const first = document.getElementById('firstname').value;
            const last = document.getElementById('lastname').value;
            const email = document.getElementById('emailadd').value;
            const phone = document.getElementById('contact-box').value;
            const method = document.getElementById('option').value;
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            console.log(checkboxes);
            if (first == "") {
                alert("Please enter firstname.");
            } else if (last == "") {
                alert("Please enter lastname.");
            } else if (email == "") {
                alert("Please enter your Email.");
            } else if (!email.includes('@')) {
                alert("Enter a valid email.");
            } else if (phone == "") {
                alert("Please enter your contact number.");
            } else if (method == "") {
                alert("Please select the contact method.");
            } else if (checkboxes.length === 0) {
                alert("Select an award.");
            } else {
                let message = "Welcome " + first + " " + last + "\n\n";
                message += "Contact Method: " + method +" (";
             if(method==="email") {
                message+=email+")"+ "\n"
             }
             else if(method==="phone"){
                message+=phone+")"+ "\n"
             }   
                message += "Selected Awards: ";
                checkboxes.forEach(function (checkbox) {
                    const label = checkbox.nextElementSibling;
                    message += label.textContent + ", ";
                });
                message = message.slice(0, -2); // Remove the trailing comma and space
                alert(message);
            }
        }