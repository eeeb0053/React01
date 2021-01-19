import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'

const CalculatorButton = ({buttonValue}) => {
    const { handleSetDisplayValue } = useContext( NumberContext )
    return (<button type="button" className="white-button"
    onClick = { () => handleSetDisplayValue}>
        {buttonValue}
    </button>
    )
}

export default CalculatorButton