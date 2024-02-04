import React from 'react'
import './common.styles.css'
const Select = () => {
    return (
        <>
            <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </>
    )
}

export default Select