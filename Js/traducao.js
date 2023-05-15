// placeholder="Digitar texto"

let translatorTextArea = document.querySelector("#translator-textarea");

// alert(translatorOptions.value);

let translatorOptions = document.getElementById("translatorOptions");

translatorOptions.addEventListener(
    "change",
    translatorOptionsAddPlaceHolder,
    false
);

function translatorOptionsAddPlaceHolder() {
    //option is selected
    if (translatorOptions.value == 1) {
        translatorTextArea.setAttribute("placeholder", "Digite um Texto");
    } else {
        translatorTextArea.setAttribute("placeholder", "Type a Text");
    }
}



// translatorOptionsAddPlaceHolder();

//função que tr
