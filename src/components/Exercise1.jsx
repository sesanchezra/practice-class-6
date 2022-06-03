import React from 'react'
import { useState } from 'react'

const Exercise1 = ({mode}) => {

    const [type, setType] = useState('password')

    const change = () => {
        if (type === 'text') {
            setType('password')
        }
        else {
            setType('text')
        }
    };

    return (
        <div>
            <h1>Input</h1>
            <div className='password-container'>
                <input type={type} placeholder='Enter your password' className={`input${mode ? '-light-mode' : '-dark-mode'}`} />
                <button className={`btn-display${mode ? '-light-mode' : '-dark-mode'}`} onClick={change}>
                    {
                        (type === 'text') ?
                            <ion-icon name="eye-off-outline"></ion-icon>
                        :
                            <ion-icon name="eye-outline"></ion-icon>
                    }
                </button>
            </div>
        </div>
    )
}

export default Exercise1
