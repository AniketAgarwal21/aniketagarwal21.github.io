let mailEffect = document.querySelector(".name")

mailEffect.addEventListener('mouseover', (e) => {
    mailEffect.style.cursor = "pointer"
    mailEffect.innerHTML = "here's my <span class=\"highlight\">email</span>"
    mailEffect.addEventListener('click', (e) => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=enquiry.aniketagarwal@gmail.com')
    })
})

mailEffect.addEventListener('mouseleave', (e) => {
    mailEffect.innerHTML = "i am <span class=\"highlight\">aniket</span>,"
})