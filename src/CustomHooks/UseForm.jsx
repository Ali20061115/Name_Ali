import React from "react";
import { useState } from 'react'

function UseForm(email) {
    const [error, setError] = useState('')
    if (!email.includes("@")) {
        setError("Email дұрыс емес")

    }
    else if (password.length < 6) {
        return "Құпия сөз 6 таңбадан кем болмау керек"

    } else{
        return "Сіз сәтті тіркелдіңіз"
    }

}
export default UseForm