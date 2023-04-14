


function codificar() {
    // Definindo a chave e a mensagem
    var key = document.getElementById("chave").value;
    var message = document.getElementById("texto").value;
    // Cifrando a mensagem
    var cipherArray = [];
    for (var i = 0; i < message.length; i++) {
        var keyIndex = i % key.length;
        var keyChar = key.charCodeAt(keyIndex) - 65;
        var messageChar = message.charCodeAt(i) - 65;
        var cipherValue = (keyChar + messageChar) % 26;
        var cipherChar = String.fromCharCode(cipherValue + 65);
        cipherArray.push(cipherChar);
    }
    var cipherText = cipherArray.join("");

    // Imprimindo o resultado
    document.getElementById("resultado-codificado").value = cipherText;
}

function descodificar() {
    // Definindo a chave e a mensagem
    var key = document.getElementById("chave").value;
    var message = document.getElementById("resultado-codificado").value;
    // Decifrando a mensagem
    var messageArray = [];
    for (var i = 0; i < message.length; i++) {
        var keyIndex = i % key.length;
        var keyChar = key.charCodeAt(keyIndex) - 65;
        var cipherChar = message.charCodeAt(i) - 65;
        var messageValue = (cipherChar - keyChar + 26) % 26;
        var messageChar = String.fromCharCode(messageValue + 65);
        messageArray.push(messageChar);
    }
    var messageDesc = messageArray.join("");

    // Imprimindo o resultado
    document.getElementById("resultado-decodificado").value = messageDesc;
}




