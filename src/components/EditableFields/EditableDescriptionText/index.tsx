import React, { ChangeEvent, useState } from 'react'
import { IUserData } from '../../Interfaces'

interface EditableDescriptionTextProps {
    userDataState: IUserData
    editMode: boolean
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableDescriptionText: React.FC<EditableDescriptionTextProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [description, setDescription] = useState(userDataState.description)
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newDescriptionText: string = e.target.value
        setDescription(newDescriptionText)
    }

    const handleFocusLost = () => {
        if (description.length > 0) {
            setUserDataState({ ...userDataState, description })
        }
    }

    if (!editMode) {
        return `${userDataState.description}`
    }

    return (
        <textarea
            onBlur={handleFocusLost}
            onChange={handleChange}
            defaultValue={description}
        />
    )
}
export default EditableDescriptionText
