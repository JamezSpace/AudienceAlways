function resetDisplay() {
    let main = document.getElementsByTagName("main")[0];
    let form_body = document.getElementById("fill-form");
    let form_preview = document.getElementById("form-summary");

    if (window.screen.width > 768) {
        form_body.append(form_preview);
        // firstElementChild of form_body is the form within
        form_body.firstElementChild.style.width = "50%"; 
        form_preview.classList.add("page-active");
    }else{
        try{
            main.insertAdjacentElement(1, form_preview);
        }catch(DOMException){}
        editProgressBar();
        form_preview.style.width = "100%";
        form_preview.style.height = "86vh";
    }
    console.log(main);
}

function editProgressBar() {
    const parser = new DOMParser();
    let progressBar = document.getElementsByClassName("progress-bar")[0];
    progressBar.classList.replace("progress-bar", "progress-bar-horizantal");

    let new_btn = parser.parseFromString("<button class=\"step\">3</button>", "text/html");
    new_btn = new_btn.body.firstChild;
    
    progressBar.appendChild(new_btn);
    disableButtons();
}


resetDisplay();

