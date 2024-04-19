import React, { ChangeEvent, useEffect, useState } from 'react'
import { IUserData } from '../../Interfaces'

interface EditableDescriptionTextProps {
    userDataState: IUserData
    editMode: number
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableDescriptionText: React.FC<EditableDescriptionTextProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [description, setDescription] = useState(userDataState.description)

    // when there's a change in userDataState such as when
    // it was edited or the edit was canceled, then re-update
    // internal state of this component
    useEffect(() => {
        setDescription(userDataState.description)
    }, [userDataState])

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newDescriptionText: string = e.target.value
        setDescription(newDescriptionText)
    }

    const handleFocusLost = () => {
        if (description.length > 0) {
            setUserDataState({ ...userDataState, description })
        } else {
            setDescription(userDataState.description)
        }
    }

    if (editMode !== userDataState.id) {
        return `${userDataState.description}`
    }

    return (
        <textarea
            onBlur={handleFocusLost}
            onChange={handleChange}
            value={description}
        />
    )
}
export default EditableDescriptionText
