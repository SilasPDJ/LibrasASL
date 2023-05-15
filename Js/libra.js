// https://www.youtube.com/@nhojeal2225/videos

const YOUTUBE = "https://www.youtube.com/embed/";
// TODO: improve transform dynamically
let librasObj = {
    "BEM-VINDO": "Vmz4oUZZ190",
    "BOM DIA": "sX458sUdYMc",
    "BOA TARDE": "FGWeEjAxoD4",
    OBRIGADO: "fJDIKh8059c",
    // "BOA NOITE": "https://youtu.be/OOxzeRXzg5M",
};

let aslObj = {
    "BEM-VINDO": "9HiLFs2oWwI",
    "BOM DIA": "VjAORB0NEaw",
    "BOA TARDE": "Xgn5_WGB9JI",
    OBRIGADO: "IvRwNLNR4_w",
};
englishArray = ["WELCOME", "GOOD MORNING", "GOOD AFTERNOON", "THANKS!"];

function addOptionToSelect(selectId, optionText) {
    const select = document.getElementById(selectId);
    const newOption = document.createElement("option");
    const idNum = select.options.length + 1; // get the new option ID by adding 1 to the number of existing options
    newOption.setAttribute("value", `option${idNum}`); // set the value attribute to the new option ID
    newOption.textContent = optionText;
    select.appendChild(newOption);
}

for (opt in librasObj) {
    addOptionToSelect("textTranslated-portuguese", opt);
}
for (opt of englishArray) {
    addOptionToSelect("textTranslated-english", opt);
}

// create a method that downloads the links in the arrays above getting the values of the arrays and save them in datasource/videos project

function getNewIframe(id, url) {
    let existingIframe = document.getElementById(id);
    if (existingIframe) {
        existingIframe.parentNode.removeChild(existingIframe);
    }

    const LOOP_URL = "";

    let iframe = document.createElement("iframe");
    iframe.setAttribute("width", "400");
    iframe.setAttribute("height", "230");
    iframe.setAttribute("id", id);
    iframe.setAttribute("src", url + LOOP_URL);
    document.querySelector(".videos").appendChild(iframe);

    return iframe;
}

function selectTextToTranslate(event) {
    let textTranslated = event.target;
    let value = textTranslated.value;
    let optionElement = textTranslated.querySelector(
        `option[value="${value}"]`
    ).text;
    const COMPLEMENT_URL = "?autoplay=1&mute=1";

    const videosLibras = getNewIframe(
        "videosLibras",
        YOUTUBE + librasObj[optionElement] + COMPLEMENT_URL
    );
    const videosAsl = getNewIframe(
        "videosASL",
        YOUTUBE + aslObj[optionElement] + COMPLEMENT_URL
    );
}

// o mapeamento está só em português...
// for (let id of ["textTranslated-portuguese"]) {
// elSelectPortuguese = document.querySelector(`#${id}`);
let id = "textTranslated-portuguese";
elSelectPortuguese = document.querySelector("#textTranslated-portuguese");
elSelectEnglish = document.querySelector("#textTranslated-english");

const fakeEvent = {
    target: elSelectPortuguese,
};
//

elSelectPortuguese.selectedIndex = 0;

elSelectPortuguese.addEventListener("change", selectTextToTranslate);
elSelectPortuguese.addEventListener("change", function (event) {
    elSelectEnglish.value = event.target.value;
});

elSelectEnglish.selectedIndex = 0;
elSelectEnglish.addEventListener("change", function (event) {
    elSelectPortuguese.value = event.target.value;

    selectTextToTranslate(fakeEvent);
});

selectTextToTranslate(fakeEvent);
// }

// downloadVideos(videoUrls);
