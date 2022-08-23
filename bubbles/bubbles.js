//Please come back to this one

//document.querySelector('div').forEach(div) => {
//}

//come back to this aswell
//document.querySelectorAll('div').forEach(div) => {
//    div.style.transform = `translate(${Math.random() * 1000}px, ${Math.random() * 1000}px´)
//}

setInterval(() => {
  document.querySelectorAll("div").forEach((div) => {
    div.style.transform = `translate(${Math.random() * 100}vw, ${
      Math.random() * 100
    }vh)`;
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  });
}, 5000);
