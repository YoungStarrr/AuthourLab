let textArea = document.getElementById("textArea");
let lettersNums = document.getElementById("Displayletters");
const saveBtn = document.getElementById("saveBtn");
const myH1 = document.getElementById("myH1");
const fileCancel = document.getElementById("fileCancel");
const selector = document.getElementById("Selector").value;
const uploadFi = document.getElementById("Upload");
const mediaBox = document.getElementById("media");
const moreV = document.getElementById("moreV");
const more = document.getElementById("more");
const nextPage = document.getElementById("Nextpage");
const cancelBtn = document.getElementById("cancelBtn");
const CancelBtn = document.getElementById("Cancelbtn");
const newtextArea = document.createElement("textarea");
newtextArea.id = "textArea";
moreV.addEventListener("click", event => {
    more.style.display = "block";
});

uploadFi.addEventListener("click", event => {
    mediaBox.style.display = "block";
});

cancelBtn.addEventListener("click", event => {
    mediaBox.style.display = "none";
});
CancelBtn.addEventListener("click", event => {
    more.style.display = "none";
});
fileCancel.addEventListener("click", event => {
    newFile.style.display = "none";
});

nextPage.addEventListener("click", event => {
    document.body.appendChild(newtextArea);
});

textValue = textArea.value;

setInterval(function () {
    textValue = textArea.value;
    textLen = textValue.length;
    lettersNums.textContent = textLen;
}, 50);

localStorage.setItem("username", "JohnDoe");
const user = { name: "Jane Doe", age: 30 };
localStorage.setItem("user", JSON.stringify(user));
const pp = localStorage.getItem("user");
myH1.innerHTML = pp;
console.log(pp);
