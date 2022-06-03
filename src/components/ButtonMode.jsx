import React  from 'react'

const ButtonMode = ({mode,changeMode}) => {

    

    return (
        <div className='button-mode'>
            <button onClick={changeMode} className={`btn-mode${mode ? '-light' : '-dark'}`}>
            {
                mode ?
                    <ion-icon name="moon-outline"></ion-icon>
                :
                    <ion-icon name="sunny-outline"></ion-icon>

            }
            </button>
            
            
        </div>
    )
}

export default ButtonMode
