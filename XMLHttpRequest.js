/*--
Requisições HTTP
https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest
https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
--*/

var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

/*--
GET
--*/

oReq.open("GET","example.com/get", true);
oReq.timeout = 8000;
oReq.send();

/*--
POST
--*/

oReq.open("POST", 'example.com/post', true);
oReq.timeout = 8000;
oReq.onreadystatechange = callback;
oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
oReq.send("username=john");

/*--
PROPERTIES
--*/

function updateProgress(evt) {
    if (evt.lengthComputable) {
        var percentComplete = evt.loaded / evt.total;
        // ...
    } else {
        // Não é possível calcular informações de progresso uma vez que a dimensão total é desconhecida
    }
}

function transferComplete(evt) {
    alert("A transferência foi concluída.");
}

function transferFailed(evt) {
    alert("Um erro ocorreu durante a transferência do arquivo.");
}

function transferCanceled(evt) {
    alert("A transferência foi cancelada pelo usuário.");
}

function callback() {
    //response
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("response").innerHTML = oReq.responseText;
    }
}