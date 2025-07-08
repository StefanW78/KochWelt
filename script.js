/* Contact form*/
function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xldnvyaz", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send-mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

/* Burger menu*/
function toggleRespMenu() {
    document.getElementById("resp_menu").classList.toggle("resp_menu_closed");
}