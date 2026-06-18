const resultEmailList = document.querySelector('.email-list');
const buttonNewEmail = document.querySelector('.new-email');

// Promise con axios

const loadEmails = () => {
    
    // svuota email list prima di generarla
    resultEmailList.innerHTML = '';
    // Ciclo per ottenere 10 email
    for (let i = 0; i < 10; i++) {
        // Get all' API 
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                // Template literal che aggiunge le email recuperate dall'API alle <li>
                resultEmailList.innerHTML += `<li>${response.data.response}</li>`;
            })
            .catch(error => console.error(error));
    }
};

loadEmails();

buttonNewEmail.addEventListener('click', loadEmails);

// Promise con fetch

/*const loadEmails = () => {

    
    // svuota email list prima di generarla
    resultEmailList.innerHTML = '';
    // Ciclo per ottenere 10 email
    for (let i = 0; i < 10; i++) {
        //FETCH
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json())
            .then(data => {
                // Template literal che aggiunge le email recuperate dall'API alle <li>
                resultEmailList.innerHTML += `<li>${data.response}</li>`;
            })
            .catch(error => console.error(error));
    }
};

loadEmails();


buttonNewEmail.addEventListener('click', loadEmails);
*/

