console.log("JS file loaded");
const xhr= new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET ', 'http://supersimplebackend.dev');
xhr.send();
