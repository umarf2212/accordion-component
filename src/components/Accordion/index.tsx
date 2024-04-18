import React, { MouseEventHandler, useEffect, useState } from 'react'
import styles from './Accordion.module.css'
import AccordionHeader from '../AccordionHeader'
import AccordionBody from '../AccordionBody'
import { IUserData } from '../Interfaces'
import AccordionFooter from '../AccordionFooter'
import _ from 'lodash'

interface AccordionProps {
    userData: IUserData
    updateCelebData: (updateCelebData: IUserData) => void
    deleteCelebData: (id: number) => void
}

const Accordion: React.FC<AccordionProps> = ({
    userData,
    updateCelebData,
    deleteCelebData,
}) => {
    const [showBody, setShowBody] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [saveButton, setSaveButton] = useState<boolean>(false)

    // Storing props data in the state so that it can be edited
    // and updated data can be sent back to the original source
    // (either the NoSQL API or to the originally fetched array)
    const [userDataState, setUserDataState] = useState<IUserData>(userData)

    const toggleAccordionBody: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowBody((showBody) => !showBody)
    }

    // save button is disabled if the original data obj and
    // edited data obj are not equal (deep copy using _isEqual from lodash)
    // only enalbed when the two objects change
    useEffect(() => {
        if (!_.isEqual(userDataState, userData)) {
            setSaveButton(true)
        } else {
            setSaveButton(false)
        }
    }, [userDataState])

    const saveUpdatedUserData = () => {
        updateCelebData(userDataState)
        setEditMode(false)
    }

    const deleteUserData = (id: number) => {
        deleteCelebData(id)
    }

    const cancelUpdatedUserData = () => {
        setEditMode(false)
        setUserDataState(userData)
    }

    return (
        <div className={styles.accordion}>
            <AccordionHeader
                userDataState={userDataState}
                setUserDataState={setUserDataState}
                editMode={editMode}
                showBody={showBody}
                toggleAccordionBody={toggleAccordionBody}
            />

            {showBody && (
                <>
                    <AccordionBody
                        userDataState={userDataState}
                        setUserDataState={setUserDataState}
                        editMode={editMode}
                    />
                    <AccordionFooter
                        editMode={editMode}
                        setEditMode={setEditMode}
                        saveUpdatedUserData={saveUpdatedUserData}
                        cancelUpdatedUserData={cancelUpdatedUserData}
                        deleteUserData={deleteUserData}
                        userDataState={userDataState}
                        saveButton={saveButton}
                    />
                </>
            )}
        </div>
    )
}
export default Accordion
