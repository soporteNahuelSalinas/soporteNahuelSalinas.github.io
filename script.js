/* const webhookURL = 'https://hook.us2.make.com/7zut8la65mpmialu9kpfbt2hhzem3rax';

function sendDataToSheet() {
    const reference = document.getElementById("reference").value;
    const data = {
        reference: reference,
        fields: []
    };

    document.querySelectorAll("#formContainer input").forEach((input) => {
        data.fields.push({
            label: input.previousSibling.innerText, // Etiqueta del campo
            value: input.value // Valor ingresado en el campo
        });
    });

    // Enviar los datos al webhook de Make
    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("Datos enviados exitosamente.");
        } else {
            alert("Error al enviar los datos.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error al enviar los datos.");
    });
}
 */