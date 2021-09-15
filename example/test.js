//setTimeout(() => {
  //const el = document.createElement("div")
  //const tn = document.createTextNode("Hi there and greetings!");
  //el.appendChild(tn);
  //document.body.insert(el)
//}

function addElement () {
  setTimeout(() => {
    const el = document.createElement("div")
    const tn = document.createTextNode("Hi there and greetings!");
    el.appendChild(tn);
    document.body.appendChild(el)
  }, 3000);
}

window.addEventListener('load', addElement)
