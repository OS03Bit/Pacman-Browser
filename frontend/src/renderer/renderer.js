const urlInputURL = document.getElementById('url');
const searchbtn = document.getElementById('search');
const webview = document.getElementById('webscreen');
const backbtn = document.getElementById('back');
const forwardbtn = document.getElementById('forward');
const reloadbtn = document.getElementById('reload');
const newtabbtn = document.getElementById('newtab');
const tablisttag = document.getElementById('tablisttag');
const tablistscreen = document.getElementById('tablistscreen');
// const tabico = document.getElementById('ico');

function handleUrl() {
  let url = "";
  const inputURL = urlInputURL.value;
  if (inputURL.startsWith("http://") || inputURL.startsWith("https://")) {
    url = inputURL;
  }
  else {
    url = "https://" + inputURL;
  }
  webview.src = url;
  tabico.src = url + '/favicon.ico';
}

webview.addEventListener('did-navigate', (e) => {
  url = e.url;
  urlInputURL.value = url;
})
backbtn.addEventListener('click', (e) => {
  webview.goBack();
})
forwardbtn.addEventListener('click', (e) => {
  webview.goForward();
})
reloadbtn.addEventListener('click', (e) => {
  webview.reload();
})
let tabcounter = 1;
// newtab.addEventListener('click', (e) => {
//   tabcounter++;
//   let newtabtaghtml = `<button id="ntbtn${tabcounter}"><div id="tab${tabcounter}"><img src="" id="ntico${tabcounter}" alt="">New Tab${tabcounter}</div></button>`;
//   let newtabwindowhtml = `<div id="tablistscreen">
//   <div class="screenset ntdiaplaynone">
//     <div id="controlbar${tabcounter}" class="controlbar">
//       <button id="back">back</button>
//       <button id="forward">forward</button>
//       <button id="reload">reload</button>
//       <button id="newtab">newtab</button>
//       <form action="">
//         <input type="text" id="url">
//         <button id="search">search</button>
//       </form>
//     </div>
//     <webview src="https://www.google.com/" id="webscreen">
//   </div>
// </div>`;
//   tablisttag.innerHTML = tablisttag.innerHTML + newtabtaghtml;
//   tablistscreen.innerHTML = tablistscreen.innerHTML + newtabwindowhtml;

// })
urlInputURL.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleUrl();
  }
})
searchbtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleUrl();
})