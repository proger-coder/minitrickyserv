const fetchButton = document.getElementById("fetchButton");

const urlLocal = 'http://127.0.0.1:8080/';
const urlHeroku = 'https://minitrickyserv.herokuapp.com/'

fetchButton.onclick = ()=> {
    //alert("кнопка нажата")

    fetch(
        urlHeroku           //выбираем, если надо обращаться к Хероку
        //urlLocal          //выбираем, если надо обращаться к локалХост серверу
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('response failed!!')
    }, networkError => console.error(networkError.message)).then(jsonresponse => {
        console.log(jsonresponse)
    })
}