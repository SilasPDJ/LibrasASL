// https://www.youtube.com/@nhojeal2225/videos

const YOUTUBE = "https://www.youtube.com/embed/";
// TODO: improve transform dynamically
let librasObj = {
  "Bem-vindo": "Vmz4oUZZ190",
  "Bom dia": "sX458sUdYMc",
  "Boa tarde": "FGWeEjAxoD4",
  Obrigado: "fJDIKh8059c",
  // "BOA NOITE": "https://youtu.be/OOxzeRXzg5M",
  'Bicicleta': 'dW5kO6kIGr4',
  'Bonito': '1xULJAH9rfg',
  'Cachorro': 'cvJ61BUguZw',
  'Carro': 'lJve1lRzVGk',
  'Com Licenca': 'ngeM--H0vGw',
  'Correto': 'ZiSRdnImkg4?t=4',
  'De Direita, Conservador': 'XZEkZKqv46M',
  'De Esquerda, Progressista': 'gYXe_HISphM',
  'Deprimido': '6NGv9p804Is',
  'Desculpa': 'XuYwAb0u6oY',
  'Direita': 'BUhcAI5HaEg',
  'Esquerda': 'bC1GSsqvaF8',
  'Eu Te Amo': 'qLE_3Yy9VVU',
  'Feio': 'GQwdo8YXffM',
  'Filme': 'bxkEJgcW7hg',
  'Gato': 'KKJl7FmX7fQ',
  'Irmao/Irma': '3s9SznJJQVU',
  'Lavar': 'xqviCDDp9z8',
  'Lembrar': 'o9vMih_5qUU',
  'Liberal': 'ejMiNsl_cyg',
  'Mae': '9WlzSyJpV1s',
  'Mentir/Mentira': 'kdexRpyy0JE',
  'Metro': 'lD3UyTpmses',
  'Morto/Morte': 'cEF26lYkU4Y',
  'Motocicleta': 'VJh7aObu3K0',
  'Mudo': 'Zb2iy69gwAo?t=11',
  'Musica': '3SkZPJMU69s',
  'Nada': 'K0SxAVyncE0',
  'O Que Aconteceu? Qual O Problema?': '-0znus2wuI4?t=23',
  'Onibus': 'emwQd82M18U',
  'Pai': '5wfonatHbrY?t=8',
  'Pobre': 'wYXt6vd_CCg?t=13',
  'Por Favor': 'lDOR-cnhfQc',
  'Problema/Dificuldade': '18EinhV7l_s',
  'Qual Seu Nome?': 'NqJKXE3suD0',
  'Qualquer  Coisa': 'tbeRI4BCl68',
  'Raiva': 'uo96uRoaUIU',
  'Respeitado': 'UhJvdgmdMn0',
  'Restaurante': 'Iw9UJWOIdq8',
  'Rico': 'RdMyyZI8n_4?t=13',
  'Sem Problemas': 'xCJqqYoZdYs',
  'Sentir': 'uM_x1X8277g',
  'Trabalho/Trabalhar': 'gBPdaHlnZrU',
  'Tudo': 'i_a_sxV9SkU',
  'Videogame': '0aY44ZrzY-Q?t=5',
  'Voltar': 'dC9nV-5au2s',
  // ours
  'Agua': '1rH5ZJ1Gn0I',
  'Ajuda': 'Ttc85c4Rsh0',
  'Banheiro': 'GUZsyxHN0QI',
  'Bem Vindo': 'OV60WiBEbU4',
  'Boa Noite': '3ACHjO5Mg04',
  'Boa Tarde': 'M6aP0MjlGqw',
  'Bom Dia': 'psiINakJn80',
  'Comer': '8PTxQce6kbw',
  'Meu Nome': '-y2Zn4tNxtc',
  'Obrigado': 'LEjGpE-Pqe4',
  'Oi': 'QV41eeN2yek',
  'Ouvir': '0wP4QSGQuGQ',
  'Paz': 'pCdBPClywow',
  'Surdo': 'nNA9SaJ-OQo',
  'Tchau': '',

};

let aslObj = {
  "Bem-vindo": "9HiLFs2oWwI",
  "Bom dia": "VjAORB0NEaw",
  "Boa tarde": "Xgn5_WGB9JI",
  Obrigado: "IvRwNLNR4_w",
  // BOA NOITE
  'Bicicleta': '8yjqcyk-xwY',
  'Bonito': 'sZrgC4od56Q',
  'Cachorro': 'hyx4R3Z5o9o',
  'Carro': 'HWHVWpYQWMg',
  'Com Licenca': '5iVxk0ynfIM',
  'Correto': '4Kn-YZKxU-0',
  'De Direita, Conservador': '9-09PAQ-O6U',
  'De Esquerda, Progressista': 'FUzwuQRdRGk',
  'Deprimido': 'IFBeQeWvaEQ',
  'Desculpa': 'NUpBPsfkErY',
  'Direita': 'MsNeMLNac4I',
  'Esquerda': '1hMj4U2QmwY',
  'Eu Te Amo': 'XKI_JQQHato',
  'Feio': '67SLQmpSfAU',
  'Filme': 'ZBZ99A1Ibyo',
  'Gato': 'DFAi7fpIUqY',
  'Irmao/Irma': '-sfCo6QT2Uw',
  'Lavar': 'NrNwxVa-9Tg',
  'Lembrar': 'N--m9IEl448',
  'Liberal': 'Tv8UxyTN0dE',
  'Mae': 'mBXGUXPUptA',
  'Mentir/Mentira': 'tIYhR5wXMlg',
  'Metro': 'KxIfdmy9B04',
  'Morto/Morte': 'p3V2KIhpr-Q',
  'Motocicleta': 'bN5CIkMNCgU',
  'Mudo': '0S8dgbKhxpA',
  'Musica': 'gLTKfqBKmG4',
  'Nada': 'Z39AWLgx5yg',
  'O Que Aconteceu? Qual O Problema?': 'Hfldx_RdaNM',
  'Onibus': 'ci1zQe_VncE',
  'Pai': 'lTpo1lYmE_U',
  'Pobre': 'Ejyz4IJMBY8',
  'Por Favor': '_rviR_jhCmg',
  'Problema/Dificuldade': '9TAG11Hkc4k',
  'Qual Seu Nome?': 'O0smVQ-1DVc',
  'Qualquer  Coisa': 'mdmm87aC3ww',
  'Raiva': 'gerACpTGuu4',
  'Respeitado': 'R2dl9dGAbFg',
  'Restaurante': 'OSUJ40zmsSI',
  'Rico': 'UvckASTnn84',
  'Sem Problemas': 'nmF_FRoRUTw',
  'Sentir': 'wyuOUjoTdVE',
  'Trabalho/Trabalhar': 'LtrmtOpUZuo',
  'Tudo': 'dVXgo4HsNpY',
  'Videogame': 'wDYv7mVwOcw',
  'Voltar': '9mDgzvGmwxw',
  // ours
  // 'Agua': '1rH5ZJ1Gn0I',
  // 'Ajuda': 'Ttc85c4Rsh0',
  // 'Banheiro': 'GUZsyxHN0QI',
  // 'Bem Vindo': 'OV60WiBEbU4',
  // 'Boa Noite': '3ACHjO5Mg04',
  // 'Boa Tarde': 'M6aP0MjlGqw',
  // 'Bom Dia': 'psiINakJn80',
  // 'Comer': '8PTxQce6kbw',
  // 'Meu Nome': '=-y2Zn4tNxtc',
  // 'Obrigado': 'LEjGpE-Pqe4',
  // 'Oi': 'QV41eeN2yek',
  // 'Ouvir': '0wP4QSGQuGQ',
  // 'Paz': 'pCdBPClywow',
  // 'Surdo': 'nNA9SaJ-OQo',
  // 'Tchau ': '5Lq0mU4iohk',


};
englishArray = [
  "Welcome",
  "Good morning",
  "Good afternoon",
  "Thank you",
  // Adicione as traduções restantes aqui
  // "GOOD NIGHT",
  "Bicycle",

  "Dog",
  "Beautiful",
  "Car",
  "Excuse Me",
  "Correct",
  "Right, Conservative",
  "Left, Progressive",
  "Depressed",
  "Sorry",
  "Right",
  "Left",
  "I Love You",
  "Ugly",
  "Movie",
  "Cat",
  "Brother/Sister",
  "Wash",
  "Remember",
  "Liberal",
  "Mother",
  "Lie",
  "Subway",
  "Dead/Death",
  "Motorcycle",
  "Mute",
  "Music",
  "Nothing",
  "What Happened? What's The Problem?",
  "Bus",
  "Father",
  "Poor",
  "Please",
  "Problem/Difficulty",
  "What's Your Name?",
  "Anything",
  "Anger",
  "Respected",
  "Restaurant",
  "Rich",
  "No Problems",
  "Feel",
  "Work",
  "Everything",
  "Videogame",
  "Back",
  // ours
  // 'Water',
  // 'Help',
  // 'Bathroom',
  // 'Welcome',
  // 'Good Night',
  // 'Good Afternoon',
  // 'Good Morning',
  // 'Eat',
  // 'My Name',
  // "Hi",
  // 'Listen',
  // 'Peace',
  // 'Deaf',
  // 'Goodbye'
];
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
