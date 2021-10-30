newFunction()
function newFunction() {
    const name = document.getElementById('name')
    const password = document.getElementById('password')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')


    form.addEventListener('submit', (e) => {
        let messages = []
        if (name.value === '' || name.value == null) {
            messages.push('Name is required')
        }

        if (password.value.length <= 6) {
            messages.push('Password must be longer than 6 characters')
        }
        if (password.value.length >= 20) {
            messages.push('Password must not be longer than 20 characters')
        }

        if (password.value.length <= 6 && password.value.length >= 20) {
            messages.push('password is in range')
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerHTML = messages.join(',')
        }


    })
}

