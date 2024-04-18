import React, { ChangeEvent, useEffect, useState } from 'react'
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

    // when there's a change in userDataState such as when
    // it was edited or the edit was canceled, then re-update
    // internal state of this component
    useEffect(() => {
        setDob(userDataState.dob)
    }, [userDataState])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDobText: string = e.target.value
        const regex = /^\d{0,4}-\d{0,2}-\d{0,2}$/
        if (regex.test(newDobText)) {
            setDob(newDobText)
        }
    }

    const handleFocusLost = () => {
        const regex = /^\d{4}-\d{1,2}-\d{1,2}$/
        if (dob.length > 0 && regex.test(dob)) {
            setUserDataState({ ...userDataState, dob })
        } else {
            setDob(userDataState.dob)
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
            pattern="\d{0,4}-\d{0,2}-\d{0,2}"
            id="dob"
        />
    )
}
export default EditableDOBText
