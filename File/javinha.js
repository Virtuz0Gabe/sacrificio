
const form = document.querySelector('form');
const resultado = document.querySelector('#resposta');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const cep = document.querySelector('#CEP').value;
    
    const formData = new FormData(form);
    const url = form.action;

    
    
    fetch(url, {method:'POST', body: formData})
    

        .then(response => response.json())
        .then(data => {

            resposta.innerHTML =
            `
            <p>CEP: ${data.cep}</p>
            <p>Logradouro: ${data.logradouro}</p>
            <p>Bairro: ${data.bairro}</p>
            <p>Cidade: ${data.localidade}</p>
            <p>Estado: ${data.uf}</p>
            `
        })

    /*
    fetch(url)
        .then(response => response.json())
        .then(data => {

            resposta.innerHTML = 
            `
            <p>CEP: ${data.cep}</p>
            <p>Logradouro: ${data.logradouro}</p>
            <p>Bairro: ${data.bairro}</p>
            <p>Cidade: ${data.localidade}</p>
            <p>Estado: ${data.uf}</p>
          `;
        })

        .catch(error => console.error(error));

    */
})