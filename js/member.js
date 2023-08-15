const filterBtn = document.getElementById("addFilter");
const filterPg = document.getElementById("filterList");
const tabs = document.getElementsByClassName("filtertab");
const tabContent = document.getElementsByClassName("tabContent");
const table = document.getElementById("payment_table");

filterBtn.addEventListener("click", e => {
    filterPg.style.display = "block";
    tabs[0].className += " active"; // display Date filter option by default
    tabContent[0].style.display = "block"; // display Date filter contents
    table.style.transform = "translateY(70px)";
});


// filterBtn.addEventListener("blur", e => {

//     if (condition) {

//     }
//     filterPg.style.display= "none";
//     tabs[0].className.replace("active", "");
//     tabContent[0].style.display = "none";
//     table.style.transform = "translateY(0)";
// });

function makeActive(e) {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].className.includes("active") && tabs[i] !== e) {
            tabs[i].classList.remove("active");
            e.classList.add("active");
        }
    }

    for (let i = 0; i < tabContent.length; i++) {
        const element = tabContent[i];

        element.style.display = "none";

        if (element.id == e.ariaValueText) {
            element.style.display = "block";
        }

    }
}

const inputs = [document.getElementById("monthBar"), document.getElementById("yearBar")];
const pane = document.getElementById("pane");
let filterByDate, filterByPlan;
// let exitFilter = ``;

let dateFilter = [];
function storeMonthValue(i) {
    if (dateFilter[0] == null) {
        dateFilter.splice(0, 0, i); //that is, if array is empty (arr[0] = nothing)
    } else if (typeof dateFilter[0] == "string") {
        dateFilter.splice(0, 1, i);
    }
}
function storeYearValue(i) {
    if (dateFilter[0] == null) {
        dateFilter.splice(0, 0, "");
        dateFilter.splice(1, 0, i);
    } else if (typeof parseInt(dateFilter[1]) == "number") {
        dateFilter.splice(1, 1, i);
    }
}


for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];

    element.addEventListener("change", e => {
        let valid = false;
        for (let j = 0; j < dateFilter.length; j++) {
            if (dateFilter.length == 2 && ((typeof dateFilter[0] == "string" && dateFilter[0] != "") && (typeof parseInt(dateFilter[1]) == "number") && dateFilter[1] != "")) {
                valid = true;
            }
        }
        // for the filter reading, sql query to the database has to be done

        if (valid) {
            // delete pre-existing button in case the user changes the filter date
            if (filterByDate != undefined) {
                pane.removeChild(filterByDate);
            }

            filterByDate = document.createElement("button");
            filterByDate.innerHTML = `<i class=\"fa-solid fa-calendar\"></i> ${dateFilter[0]} ${dateFilter[1]} <button class=\"clearFilter\">&times;</button>`;
            filterByDate.setAttribute("class", "gen");

            // console.log(pane.parentElement);

            // pane.appendChild(filterByDate);
            pane.insertBefore(filterByDate, pane.childNodes[2]);
            table.style.transform = "translateY(0)";
            filterPg.style.display = "none";
            dateFilter.splice(0, dateFilter.length);
            addFunctionalityToButton();
        }
    });
}

function planSelected(value) {
    if (filterByPlan != undefined) {
        pane.removeChild(filterByPlan);
    }
    filterByPlan = document.createElement("button");
    filterByPlan.innerHTML = `<i class="fa-solid fa-leaf"></i> ${value} <button class=\"clearFilter\">&times;</button>`;
    filterByPlan.setAttribute("class", "gen");

    pane.insertBefore(filterByPlan, pane.childNodes[2]);
    table.style.transform = "translateY(0)";
    filterPg.style.display = "none";

    tabs[1].classList.remove("active");
    tabContent[1].style.display = "none";
    addFunctionalityToButton();
}

// TODO: Check this out!!

function addFunctionalityToButton() {
    const exitFilter = document.querySelectorAll("button.clearFilter");
    
    for (let index = 0; index < exitFilter.length; index++) {
        const element = exitFilter[index];
        
        element.addEventListener("click", e => {
            element.parentElement.style.display = "none";
            // set table to display all contents
        });
    }
}



// TODO: 'All' button should fetch all records from the database, that is, "SELECT * FROM Table_name"


// monthInput.addEventListener("change", e => {
//     monthSelected = monthInput.value;
//     // console.log(monthSelected);
// });

// yearInput.addEventListener("change", function () {
//     yearSelected = yearInput.value;
// });



// function receiveInput(element) {
//     let val = element.value;

//     if (element.id == "monthBar") {
//         let monthSelected = val;
//     }else if(element.id == "yearBar"){
//         let yearSelected = val;
//     }

//     return monthSelected, yearSelected;
// }


