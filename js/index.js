// open or close login page
const openLogin = document.getElementById("openLogin");
const exit = document.getElementById("exitLogin");
const loginPage = document.querySelector(".wrapper");
const body = document.querySelector(".body");

openLogin.addEventListener("click", e => {
    body.classList.add("overlay");
    loginPage.classList.add("popup");
})
exit.addEventListener("click", e => {
    body.classList.remove("overlay");
    loginPage.classList.remove("popup");
});

// form validation
const form = document.forms[0];
console.log(form);

// show controls of the video on hover
const vids = document.getElementsByClassName("vids");
for (let index = 0; index < vids.length; index++) {
    const element = vids[index];
    element.addEventListener("mouseover", function () { this.controls = true; });
    element.addEventListener("mouseout", function () { this.controls = false; });
}

// FAQ section
const els = document.getElementsByName("chk");
for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.addEventListener("click", e => {
        const answers = document.querySelectorAll(".answer");
        const parent = element.parentNode; //this is the question div the checkbox is in

        // parent.nextElementSibling is the answer block that is sibling to the question div
        answers.forEach(answer => {
            const span = parent.lastElementChild;
            if (answer == parent.nextElementSibling){
                if(element.checked){
                    span.style.rotate = "45deg";
                    answer.style.opacity = "1";
                    answer.style.padding = " 1% 5%";
                    answer.style.gridTemplateRows = "1fr";
                }else {
                    span.style.rotate = "90deg";
                    answer.style.opacity = "0";
                    answer.style.padding = " 0";
                    answer.style.gridTemplateRows = "0";
                }
            }
        });
    });
}
