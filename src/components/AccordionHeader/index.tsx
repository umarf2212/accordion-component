import React, { MouseEventHandler } from 'react'
import styles from './AccordionHeader.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import EditableUsernameText from '../EditableFields/EditableUsernameText'
import { IUserData } from '../Interfaces'

interface AccordionHeaderProps {
    userDataState: IUserData
    setUserDataState: React.Dispatch<React.SetStateAction<IUserData>>
    editMode: number
    activeAccordion: number
    toggleAccordionBody: MouseEventHandler<HTMLDivElement>
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
    userDataState,
    setUserDataState,
    editMode,
    activeAccordion,
    toggleAccordionBody,
}) => {
    return (
        <div className={styles.row}>
            <div className={styles.accordion_user_image}>
                <img
                    src={userDataState.picture}
                    width={72}
                    height={72}
                    alt="User Thumbnail"
                />
            </div>
            <div className={styles.accordion_title}>
                <EditableUsernameText
                    userDataState={userDataState}
                    setUserDataState={setUserDataState}
                    editMode={editMode}
                />
            </div>
            <div
                className={styles.accordion_toggle}
                onClick={(e) => editMode === -1 && toggleAccordionBody(e)}
            >
                {activeAccordion === userDataState.id ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                )}
            </div>
        </div>
    )
}
export default AccordionHeader
