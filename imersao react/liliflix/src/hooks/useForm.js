import { useState } from 'react'

function useForm(valoresIniciais){

    const [values, setValue] = useState(valoresIniciais)

    function setValue(key, value){
        setValue({
        ...values,
        [key]: value
        })
    }

    function handleChange(infoDoEvento){
        setValue(
        infoDoEvento.target.getAttribute('name'),
        infoDoEvento.target.value
        )
    }

    function clearForm(){
        setValues(valoresIniciais)
    }

    return {
        values, 
        handleChange,
        clearForm
    }
}

export default useForm