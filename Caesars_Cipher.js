//Esse código é um exercício do FreeCodeCamp para fazer uma criptografia Caesars Cipher de espaçamento de código por 13 unidades
function rot13(str) {
  var newStr = [];
  for (var x of str) {
    var cod = x.charCodeAt();
    console.log(cod);
    if (cod > 64 && cod < 91) {
      if (cod > 77) {
        cod += 13;
        var y = cod - 90;
        var y = y + 64;
        cod = y;
      } else {
        cod += 13;
      }
    }
    console.log(cod);
    newStr.push(String.fromCharCode(cod));
  }
  console.log(newStr.join(""));
  return newStr.join("");
}

rot13("SERR PBQR ");
