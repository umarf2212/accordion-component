import React, { ChangeEvent, useState } from 'react'
import { IUserData } from '../../Interfaces'
import calculateYearsSince from '../../../utils/convertDateToYears'

interface EditableTextProps {
    userDataState: IUserData
    editMode: boolean
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
}

const EditableDOBText: React.FC<EditableTextProps> = ({
    userDataState,
    editMode,
    setUserDataState,
}) => {
    const [dob, setDob] = useState(userDataState.dob)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDobText: string = e.target.value
        setDob(newDobText)
    }

    const handleFocusLost = () => {
        if (dob.length > 0) {
            setUserDataState({ ...userDataState, dob })
        }
    }

    if (!editMode) {
        return `${calculateYearsSince(new Date(dob))} Years`
    }

    return (
        <input
            type="text"
            value={dob}
            onBlur={handleFocusLost}
            onChange={handleChange}
        />
    )
}
export default EditableDOBText
