import React, { MouseEventHandler, useState } from 'react'
import styles from './Accordion.module.css'
import AccordionHeader from '../AccordionHeader'
import AccordionBody from '../AccordionBody'
import { IUserData } from '../Interfaces'
import AccordionFooter from '../AccordionFooter'

interface AccordionProps {
    userData: IUserData
}

const Accordion: React.FC<AccordionProps> = ({ userData }) => {
    const [showBody, setShowBody] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)

    // Storing props data in the state so that it can be edited
    // and updated data can be sent back to the original source
    // (either the NoSQL API or to the originally fetched array)
    const [userDataState, setUserDataState] = useState<IUserData>(userData)

    const toggleAccordionBody: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowBody((showBody) => !showBody)
    }

    const saveUpdatedUserData = () => {}

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
                    />
                </>
            )}
        </div>
    )
}
export default Accordion
