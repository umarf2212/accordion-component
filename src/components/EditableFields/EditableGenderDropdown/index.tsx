import React, { ChangeEvent, useState } from 'react'
import { IUserData } from '../../Interfaces'

interface EditableDropdownProps {
    userDataState: IUserData
    editMode: boolean
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableGenderDropdown: React.FC<EditableDropdownProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [gender, setGender] = useState(userDataState.gender)
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newGenderText: string = e.target.value
        setGender(newGenderText)
    }

    const handleFocusLost = () => {
        if (gender.length > 0) {
            setUserDataState({ ...userDataState, gender })
        }
    }

    if (!editMode) {
        return `${userDataState.gender}`
    }

    return (
        <select onChange={handleChange} onBlur={handleFocusLost}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
            <option value="rather_not_say">Rather not say</option>
        </select>
    )
}
export default EditableGenderDropdown
