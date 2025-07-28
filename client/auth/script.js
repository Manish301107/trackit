const firstname = document.getElementById('FirstName')
const lastname = document.getElementById('LastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const signUpBtn = document.getElementById('signUpBtn')

signUpBtn.addEventListener('click', async () => {
    event.preventDefault();
    const userDetail = {
        'FirstName': firstname.value,
        'LastName': lastname.value,
        'Email': email.value,
        'Password': password.value,
    }
    console.log(userDetail)

    let url = "http://localhost:3011/signup"
    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Set the correct content type
        },
        body: JSON.stringify(userDetail),
    })
    const data = await response.json()
    console.log(data)
})

document.getElementById('signUpWithGoogle').addEventListener('click', ()=>{
    location.href = "https://manish301107.github.io/trackit/client/auth/google"
})
