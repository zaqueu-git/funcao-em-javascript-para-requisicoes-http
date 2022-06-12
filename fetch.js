document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    let myHeaders = new Headers();
    myHeaders.append("Cookie", document.cookie);
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
    };
    
    fetch("http://localhost/mvc/entidade/spa", requestOptions)
    .then(response => {
        response.json().then(data => {
            myResponseJson(data)
        });
    })
    .catch(error => console.log('error', error));

    function myResponseJson(data) {
        console.log(data);
    }
}