function resetDisplay() {
    let main = document.getElementsByTagName("main")[0];
    let form_body = document.getElementById("fill-form");
    let form_preview = document.getElementById("form-summary");

    if (window.screen.width > 600) {
        form_body.append(form_preview);
    }else{
        try{
            main.insertAdjacentElement(1, form_preview);
        }catch(DOMException){}
        editProgressBar();
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

