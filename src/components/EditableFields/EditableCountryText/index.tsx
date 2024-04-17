import React, { ChangeEvent, useState } from 'react'
import { IUserData } from '../../Interfaces'

interface EditableCountryTextProps {
    userDataState: IUserData
    editMode: boolean
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableCountryText: React.FC<EditableCountryTextProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [country, setCountry] = useState(userDataState.country)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCountryText: string = e.target.value
        setCountry(newCountryText)
    }

    const handleFocusLost = () => {
        if (country.length > 0) {
            setUserDataState({ ...userDataState, country })
        }
    }

    if (!editMode) {
        return `${userDataState.country}`
    }

    return (
        <input
            type="text"
            value={country}
            onBlur={handleFocusLost}
            onChange={handleChange}
        />
    )
}
export default EditableCountryText
