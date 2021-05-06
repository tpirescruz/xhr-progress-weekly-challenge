 // une fois que le DOM a chargé
 const json =
 "https://ipfs.infura.io/ipfs/QmUncLe1PecbpRANzrg9XW9QGCPwkdipPs8ccrQxe7ud8v";
document.addEventListener("DOMContentLoaded", () => {
 // instanciation de l'objet XHR
 const xhr = new XMLHttpRequest();
 let progress = document.querySelector('progress');
 let output = document.querySelector('#output');
 function reqListener() {
   console.log(JSON.parse(this.responseText));
 }
 //xhr.addEventListener("load", reqListener);
 xhr.addEventListener("error", console.warn);
 xhr.addEventListener("progress", (e) => {
   
   progress.value = `${((e.loaded / e.total) * 100)}`;
   output.innerHTML = `${~~((e.loaded / e.total) * 100)} %`
 });
 xhr.open(
   "GET",
   "https://ipfs.infura.io/ipfs/QmUncLe1PecbpRANzrg9XW9QGCPwkdipPs8ccrQxe7ud8v"
 );
 xhr.send();
});