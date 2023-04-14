// Codificação
function encodeRailFenceWithKey() {
    var message = document.getElementById("texto").value.toUpperCase();
    var key = parseInt(document.getElementById("chave").value);
    var railArray = [];
    for (var i = 0; i < 7; i++) {
      railArray.push("");
    }
    var rail = 0;
    var direction = "down";
    for (var i = 0; i < message.length; i++) {
      railArray[rail] += message.charAt(i);
      if (direction === "down") {
        rail++;
        if (rail === key - 1) {
          direction = "up";
        }
      } else {
        rail--;
        if (rail === 0) {
          direction = "down";
        }
      }
    }
    var encodedMessage = railArray.join("");
    document.getElementById("resultado-codificado").value = encodedMessage;
  }
  
  // Decodificação
  function decodeRailFenceWithKey() {
    var encodedMessage = document.getElementById("resultado-codificado").value;
    var key = parseInt(document.getElementById("chave").value);
    var railArray = [];
    for (var i = 0; i < 7; i++) {
      railArray.push("");
    }
    var rail = 0;
    var direction = "down";
    for (var i = 0; i < encodedMessage.length; i++) {
      railArray[rail] += "x";
      if (direction === "down") {
        rail++;
        if (rail === key - 1) {
          direction = "up";
        }
      } else {
        rail--;
        if (rail === 0) {
          direction = "down";
        }
      }
    }
    var index = 0;
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < railArray[i].length; j++) {
        railArray[i] = railArray[i].substring(0, j) + encodedMessage.charAt(index) + railArray[i].substring(j + 1);
        index++;
      }
    }
    rail = 0;
    direction = "down";
    var decodedMessage = "";
    for (var i = 0; i < encodedMessage.length; i++) {
      decodedMessage += railArray[rail].charAt(0);
      railArray[rail] = railArray[rail].substring(1);
      if (direction === "down") {
        rail++;
        if (rail === key - 1) {
          direction = "up";
        }
      } else {
        rail--;
        if (rail === 0) {
          direction = "down";
        }
      }
    }
    document.getElementById("resultado-descodificado").value = decodedMessage;
  }