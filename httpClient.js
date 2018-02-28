function enviarCorreo() {
    var valorDelTexto = document.getElementById("dataAEnviar");
    var email = document.getElementById("email");
    console.log("Enviando Correo");
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://54.202.10.0/reaxium_data_sender_node1/EmailService/send');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            var serviceResponse = JSON.parse(xhr.responseText);
            console.log(serviceResponse);
        } else if (xhr.status !== 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    }
    var objectToSend = JSON.stringify({
        ReaxiumParameters: {
            EmailService: {
                system_info: {
                    aplication_id: 4,
                    aplication_name: "ReaxiumWebApp"
                },
                email_data: {
                    to: email.value,
                    subject: "Reaxium WebApp ContactMe",
                    template: "contact_me",
                    params: {
                        texto: valorDelTexto.value,
                    }
                }
            }
        }
    });
    xhr.send(objectToSend);
    console.log("Correo Enviado");
}
