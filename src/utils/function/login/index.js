
function verificationData(inputs){
    const handleForm = e => {
        e.preventDefault()

        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){
                // setValidation("6 characters min")
        }
    }
    return handleForm
}

export default verificationData