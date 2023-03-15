setInterval(() => {
    var trollid = document.getElementById("form-text-area");
    var trollLabel = document.getElementById("form-text-label");

    if (trollid.value == "im gay") {
        trollLabel.classList.remove("form__textarea-active");
    }
    else {
        if (!trollLabel.classList.contains("form__textarea-active")) {
            trollLabel.classList.add("form__textarea-active");
        }
    }
}, 1);