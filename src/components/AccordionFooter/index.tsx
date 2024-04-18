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
import { IUserData } from '../Interfaces'
import calculateYearsSince from '../../utils/convertDateToYears'

interface AccordionFooterProps {
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    saveUpdatedUserData: () => void
    cancelUpdatedUserData: () => void
    deleteUserData: (id: number) => void
    userDataState: IUserData
    saveButton: boolean
}

const AccordionFooter: React.FC<AccordionFooterProps> = ({
    editMode,
    setEditMode,
    saveUpdatedUserData,
    cancelUpdatedUserData,
    deleteUserData,
    userDataState,
    saveButton,
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
                        onClick={() => saveButton && saveUpdatedUserData()}
                    />
                </div>
            ) : (
                <div>
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className={classnames(styles.icon, styles.deleteIcon)}
                        onClick={() => deleteUserData(userDataState.id)}
                    />
                    <FontAwesomeIcon
                        icon={faPencil}
                        className={classnames(styles.icon, styles.editIcon)}
                        onClick={() =>
                            Number(
                                calculateYearsSince(new Date(userDataState.dob))
                            ) >= 18 && setEditMode(true)
                        }
                    />
                </div>
            )}
        </div>
    )
}
export default AccordionFooter
