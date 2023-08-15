// addEventListener("DOMContentLoaded", beginFunctions); -- this line is only needed if javascript file loaded from the head section of the html document, this because the head section is run before the body loads, hence, to avoid having null objects at rumtime of the head tag, the event listener "DOMContentLoaded" is used, that is, run once all DOM contents(body) are fully loaded.

// consequently, the other option is to run your script in the body, that is, have the script code in the body rather the head, coz then, the body would be loading or have loaded, hence, having null wont happen

beginFunctions();
const textHeading = document.getElementById("pay_or_register_text");
function beginFunctions() {
    const passwordForRegistration = document.getElementById("passwordForRegistration");
    const registerWithAA = document.getElementById("register");
    const signUpButton = document.getElementById("signUp");

    registerWithAA.addEventListener("click", e => {
        if (registerWithAA.checked) {
            passwordForRegistration.style.display = "flex";
            textHeading.innerText = "Account Creation";
            signUpButton.innerText = "Sign Up"
        } else {
            passwordForRegistration.style.display = "none";
            textHeading.innerText = "Purchase a Webinar";
            signUpButton.innerText = "Proceed to Payment";
        }

    });


    signUpButton.addEventListener("click", (e) => {
        const result = valInputs(registerWithAA);
        console.log(result);
        const successBox = document.getElementById("registrationSuccess");
        if (result == false) {
            e.preventDefault();
            alert("INVALID INPUT SOMEWHERE");
        } else {
            setTimeout(successBox.style.display = "flex", 5000);
            // document.aud_form.action = "member.html";

        }
    });
}

function valGenName() {
    let valid = false;
    const nameField = document.getElementById("name");
    const status = document.getElementById("statusName");
    const inputName = nameField.value.trim();
    let letters = /[A-Za-z]+$/;

    if (inputName.length == 0) {
        let notif = "  Name field cannot be left blank";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    } else if (inputName.split(" ").length < 2) {
        let notif = "  Fill in your full name separated by a space ' '";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    } else if (!letters.test(inputName)) {
        let notif = "  Only letter characters permitted";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    } else {
        valid = true;
        status.innerText = "";
    }

    return [nameField, valid];
}

function valSName() {
    let valid = false;
    const nameField = document.getElementById("s_name");
    const status = document.getElementById("statusSName");
    const inputSName = nameField.value.trim();

    if (inputSName.length == 0) {
        let notif = " Stream Name field cannot be left blank";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    } else {
        valid = true;
        status.innerText = "";
    }

    return [nameField, valid];
}

function valEmail() {
    let valid = false;
    let notif = "";
    const email = document.getElementById("email");
    const status = document.getElementById("statusEmail");
    const splitEmail = email.value.trim().split("@");
    const emailsExt = ["gmail.com", "yahoo.com", "outlook.com"];

    if (email.value.trim() == "") {
        notif = "  Email field cannot be left blank";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    }

    if (email.value.trim().length > 0 && emailsExt.indexOf(splitEmail[1]) != 0) {
        notif = "  Email extension not valid";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    }

    if (typeof splitEmail[0] === "string" && emailsExt.indexOf(splitEmail[1]) >= 0) {
        valid = true;
        status.innerText = "";
    }

    return [email, valid];
}

function valPlans() {
    let valid = false;
    const status = document.getElementById("statusPlan");
    const alpha = document.getElementById("alpha");
    const beta = document.getElementById("beta");
    const delta = document.getElementById("delta");
    const gold = document.getElementById("gold");
    const plans = document.getElementsByClassName("select");
    const desc = document.querySelector(".planPaidDetails");
    const planPaid = document.getElementById("planPaid");
    const planPrice = document.getElementById("PlanPrice");
    // const plan_to_price = {
    //     "alpha" : `${}`, //empty slot is the price for Alpha Plan and the rest to be read from database
    //     "beta" : `${}`,
    //     "delta" : `${}`,
    //     "gold" : `${}`
    // };

    if (alpha.checked == true) {
        valid = true;
        desc.style.display = "flex";
        planPaid.innerText = "Alpha Plan";
    } else if (beta.checked == true) {
        valid = true;
        desc.style.display = "flex";
        planPaid.innerText = "Beta Plan";
    } else if (delta.checked == true) {
        valid = true;
        desc.style.display = "flex";
        planPaid.innerText = "Delta Plan";
    } else if (gold.checked == true) {
        valid = true;
        desc.style.display = "flex";
        planPaid.innerText = "Gold Plan";
    } else {
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + "  Select a Plan above!";
    }

    if (valid) {
        status.innerText = "";
    }
    return [plans, valid];
}

function dateOnChange(element) {
    const fullDate = document.getElementById("fullDate");
    let dateInput = element.value;
    let yearInput = dateInput.substr(0, 4);
    let monthInput = dateInput.substr(5, 2);
    let dayInput = dateInput.substr(8, 2);
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July",
        , "August", "September", "October", "November", "December"];
    let maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    let currentDate = new Date().getDate();

    if (yearInput < currentYear) {
        element.style.border = "1.5px solid red";
    } else {
        if (monthInput < currentMonth) {
            element.style.border = "1.5px solid red";
        } else {
            if (dayInput < currentDate) {
                element.style.border = "1.5px solid red";
            } else {
                element.style.border = "1.5px solid darkgray";
                fullDate.innerText = `${weekDay[new Date(dateInput).getDay()]} ${dayInput} ${months[new Date(dateInput).getMonth() + 1]}, ${yearInput}`;
            }
        }
    }
}

function timeOnChange(element) {
    const fullDate = document.getElementById("fullDate");
    let fullTime = element.value;
    let hour = fullTime.substr(0, 2);

    if (fullDate.innerText == "") {
        element.style.border = "1.5px solid red";
        alert("Fill in the Date Section firstly");
    } else {
        element.style.border = "1.5px solid darkgray";
        fullDate.innerText += ` by ${hour % 12}:${fullTime.substr(3, 2)} ${hour > 12 ? "PM" : "AM"}`;
    }
}

const fullDate = document.getElementById("fullDate");

function valDate() {
    const status = document.getElementById("statusDate");

    if (fullDate.innerText.indexOf('by', 11) == -1) {
        let notif = "  Select a valid date and time";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    } else {
        valid = true;
        status.innerText = "";
    }
}

function valPassword() {
    let valid = false;
    const passwordField = document.getElementById("password");
    const status = document.getElementById("statusPassword");
    const inputPassword = passwordField.value;

    for (let index = 0; index < inputPassword.length; index++) {
        const element = inputPassword[index];
        // console.log(element);
    }

    if (inputPassword.length == 0) {
        let notif = "  Password field cannot be left blank";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    } else if (inputPassword.length < 4) {
        let notif = "  Password must exceed 4 characters";
        status.innerHTML = "<i class=\"fa-solid fa-asterisk\"></i>" + notif;
    }

    if (inputPassword.length > 4) {
        valid = true;
        status.innerText = "";
        alert("password valid");
    }

    return [passwordField, valid];
}

function valInputs(element) {
    const invalids = [];
    const valids = [];
    const resultName = valGenName();
    const resultSName = valSName();
    const resultEmail = valEmail();
    const resultPlans = valPlans(); // just to call the function for checking plans on submit button click
    valDate();
    let resultPassword;
    const array = [resultName, resultSName, resultEmail];
    // console.log(array);

    if (array[1][1]) // if name validation(item at index 1 in the array) is valid, store the name in a localStrorage that would be used by profile page. array[1] represents the input field for the name and array[1][1] represents the validation boolean.
    {
        localStorage.setItem("name", `${array[0][0].value}`);
    }

    // if the registration checkbox is ticked then a password is required to setup a profile, implying there needs to be a password validation also. This is what this block of code does and this is only executed when all inputs are validated by this function.
    if (element.checked) {
        resultPassword = valPassword();
        array.push(resultPassword);
    }

    // SEPARATE THE VALID INPUT FIELDS FROM THE INVALIDS
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (!element[1]) {
            invalids.push(element[0]);
        } else {
            valids.push(element[0]);
        }
    }

    if (invalids.length != 0) {

        // TO CHANGE THE COLOR OF THE LINE FOR THE INVALID INPUTS TO RED
        for (let i = 0; i < invalids.length; i++) {
            const element = invalids[i];
            element.style.border = "1.5px solid red";
        }
        // AFTER CHANGING BOTTOM-BORDER LINE TO RED, UPON CORRECT ENTRY, CHANGE THE COLOR LINE TO GREEN
        for (let i = 0; i < valids.length; i++) {
            const element = valids[i];
            element.style.border = "1.5px solid gainsboro"; // default border settings

        }
 
        return false;
    }

    // this ensures the plan is selected for successful submission
    const radioButtons = document.getElementsByClassName("select");
    let count = 0;
    
    for (let index = 0; index < radioButtons.length; index++) {
        const element = radioButtons[index];

        if (!element.checked) {
            count ++;
        }else{
            break;
        }

        if (count == radioButtons.length) {
            return false;
        }
    }

    // this ensures date field is filled for successful submission. Having length < 11 as a reference is because the shortest possible date is 10 characters(Friday/Monday 31, May)
    if ((textHeading.innerText == "Purchase a Webinar" || textHeading.innerText == "Account Creation") && fullDate.innerText.length < 10) {
        return false;
    }
}
