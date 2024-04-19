import React, { ChangeEvent, useEffect, useState } from 'react'
import { IUserData } from '../../Interfaces'

interface EditableCountryTextProps {
    userDataState: IUserData
    editMode: number
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableCountryText: React.FC<EditableCountryTextProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [country, setCountry] = useState(userDataState.country)

    // when there's a change in userDataState such as when
    // it was edited or the edit was canceled, then re-update
    // internal state of this component
    useEffect(() => {
        setCountry(userDataState.country)
    }, [userDataState])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCountryText: string = e.target.value
        const regex = /^[a-zA-Z\s]*$/
        if (newCountryText.length === 0 || regex.test(newCountryText)) {
            setCountry(newCountryText)
        }
    }

    const handleFocusLost = () => {
        if (country.length > 0) {
            setUserDataState({ ...userDataState, country })
        } else {
            setCountry(userDataState.country)
        }
    }

    if (editMode !== userDataState.id) {
        return `${userDataState.country}`
    }

    return (
        <input
            type="text"
            value={country}
            onBlur={handleFocusLost}
            onChange={handleChange}
            pattern="[a-zA-Z\s]"
            id="country"
        />
    )
}
export default EditableCountryText
