const token = '5247487571:AAF9KUIrLYB52THglAVK4Qniv2hIlegr94s'
const chatID = '1787327143'
const btn = document.querySelector('#sendButton')
let name1 = document.querySelector('#name1')
let gmail = document.querySelector('#mail')
let text = document.querySelector('#message_text')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    nameValue = name1.value
    gmailValue = gmail.value
    textValue = text.value
    console.log(name1)
    let message = `Name - ${nameValue} lastName - ${gmailValue} number - ${textValue} `

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}`
    
    axios.get(url)
        .then(response => {
            alert('success')
        })
        .catch(error => alert('error '));
})
