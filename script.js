const btn = document.getElementById("btn");
const code = document.getElementById("code");
let btnon = false;
function btnp() {
  if (btnon) {
    btn.classList.add("btn-off");
    btn.classList.remove("btn-on");
    code.value = bcode(btnon, code.value);
    btnon = false;
  } else {
    btn.classList.remove("btn-off");
    btn.classList.add("btn-on");
    code.value = bcode(btnon, code.value);
    btnon = true;
  }
}

function bcode(on, code) {
  if (on) {
    try {
      // Parse string JSON menjadi object
      const jsonObject = JSON.parse(code);

      // Format ulang JSON dengan indentasi 2 spasi
      const jsonAkhir = JSON.stringify(jsonObject, null, 2);

      console.log(jsonAkhir);
      return jsonAkhir;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      alert("JSON ERROR");
    }
  } else {
    try {
      // Parse string JSON menjadi object
      const jsonObject = JSON.parse(code);

      // Format ulang JSON menjadi satu baris (minified)
      const jsonMinified = JSON.stringify(jsonObject);

      console.log(jsonMinified);
      return jsonMinified;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      alert("JSON ERROR");
    }
  }
}
