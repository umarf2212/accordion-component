import React from 'react'
import styles from './AccordionFooter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrashCan,
    faPencil,
    faCircleCheck,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

interface AccordionFooterProps {
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    saveUpdatedUserData: () => void
    cancelUpdatedUserData: () => void
}

const AccordionFooter: React.FC<AccordionFooterProps> = ({
    editMode,
    setEditMode,
    saveUpdatedUserData,
    cancelUpdatedUserData,
}) => {
    return (
        <div className={classnames(styles.row, styles.accordion_actions)}>
            {editMode ? (
                <div>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className={classnames(styles.icon, styles.cancelIcon)}
                        onClick={cancelUpdatedUserData}
                    />
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={classnames(styles.icon, styles.checkIcon)}
                        onClick={saveUpdatedUserData}
                    />
                </div>
            ) : (
                <div>
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className={classnames(styles.icon, styles.deleteIcon)}
                    />
                    <FontAwesomeIcon
                        icon={faPencil}
                        className={classnames(styles.icon, styles.editIcon)}
                        onClick={() => setEditMode(true)}
                    />
                </div>
            )}
        </div>
    )
}
export default AccordionFooter
