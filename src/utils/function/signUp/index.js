
export default function functionSignUp(inputs, setValidation){
    const handleForm = e => {
        e.preventDefault()

        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){
            setValidation("6 characters minimum")
            return
        }
        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation("Les mots de passe ne correspondent pas")
            return
        }

        const email = inputs.current[0].value
        const password = inputs.current[1].value

        const requestOptions = {
            method: "POST", 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }

        try{
            const response =  fetch("http://localhost:5000/api/auth/signup", requestOptions)
            const data =  response.json
            console.log(data)
        } catch(error){
            console.error(error)
        }
    //     fetch("http://localhost:5000/api/auth/signup", requestOptions)
    //     .then(response => response.json())
    //     .then(date => console.log(date) ) 
    //     .catch(error => console.error(error))
    }
    return handleForm
}

