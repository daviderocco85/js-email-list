const resultEmailList = document.querySelector('.email-list');
const buttonNewEmail = document.querySelector('.new-email');
const spinner = document.querySelector('.loading-spinner');

// Promise con axios

const loadEmails = () => {
    // mostra spinner   
    spinner.classList.remove('d-none');
    
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
            .catch(error => console.error(error))
            .finally(()=> spinner.classList.add('d-none'));// nascondi spinner   
    }
};

loadEmails();

buttonNewEmail.addEventListener('click', loadEmails);


// Promise con fetch

/*const loadEmails = () => {
    // mostra spinner
    spinner.classList.remove('d-none');
    
    // svuota email list prima di generarla
    resultEmailList.innerHTML = '';

    let completed = 0; // contatore fetch completate

    // Ciclo per ottenere 10 email
    for (let i = 0; i < 10; i++) {
        //FETCH
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json())
            .then(data => {
                // Template literal che aggiunge le email recuperate dall'API alle <li>
                resultEmailList.innerHTML += `<li>${data.response}</li>`;
            })
            .catch(error => console.error(error))
            .finally(() => {
                completed++;

                // quando tutte le 10 fetch sono finite -> nascondi spinner
                if (completed === 10) {
                    spinner.classList.add('d-none');
                }
            });
    }
};

loadEmails();


buttonNewEmail.addEventListener('click', loadEmails);
*/

