import React, { ChangeEvent, useState } from 'react'
import { IUserData } from '../../Interfaces'

interface EditableUsernameTextProps {
    userDataState: IUserData
    editMode: boolean
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableUsernameText: React.FC<EditableUsernameTextProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [fullName, setFullName] = useState(
        `${userDataState.first} ${userDataState.last}`
    )
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fullNameText: string = e.target.value
        setFullName(fullNameText)
    }

    const handleFocusLost = () => {
        if (fullName.length > 0) {
            const fullNameSplit = fullName.split(' ')
            const first = fullNameSplit.slice(0, 1)[0]
            const last = fullNameSplit.slice(1).join(' ')
            setUserDataState({ ...userDataState, first, last })
        } else {
            setFullName(`${userDataState.first} ${userDataState.last}`)
        }
    }

    if (!editMode) {
        return `${userDataState.first} ${userDataState.last}`
    }

    return (
        <input
            type="text"
            value={`${fullName}`}
            onBlur={handleFocusLost}
            onChange={handleChange}
            className="usernameTextField"
        />
    )
}
export default EditableUsernameText