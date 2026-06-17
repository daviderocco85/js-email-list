const resultEmailList = document.querySelector('.email-list');
const buttonNewEmail = document.querySelector('.new-email');

// Promise con axios

const loadEmails = () => {
    // svuota console
    console.clear();
    // svuota email list prima di generarla
    resultEmailList.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                console.log(response.data);
                resultEmailList.innerHTML += `<li>${response.data.response}</li>`;
            })
            .catch(error => console.error(error));
    }
};

loadEmails();

buttonNewEmail.addEventListener('click', loadEmails);

// Promise con fetch

/*const loadEmails = () => {

    // svuota console
    console.clear();
    // svuota email list prima di generarla
    resultEmailList.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resultEmailList.innerHTML += `<li>${data.response}</li>`;
            })
            .catch(error => console.error(error));
    }
};

loadEmails();


buttonNewEmail.addEventListener('click', loadEmails);
*/

