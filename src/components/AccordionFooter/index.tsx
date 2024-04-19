import React, { useState } from 'react'
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
import DialogModal from '../DialogModal'

interface AccordionFooterProps {
    editMode: number
    setEditMode: React.Dispatch<React.SetStateAction<number>>
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
    const [deleteDialogVisibility, setDeleteDialogVisibility] =
        useState<boolean>(false)
    return (
        <div className={classnames(styles.row, styles.accordion_actions)}>
            {editMode === userDataState.id ? (
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
                        onClick={() => setDeleteDialogVisibility(true)}
                    />
                    <FontAwesomeIcon
                        icon={faPencil}
                        className={classnames(styles.icon, styles.editIcon)}
                        onClick={() =>
                            Number(
                                calculateYearsSince(new Date(userDataState.dob))
                            ) >= 18 && setEditMode(userDataState.id)
                        }
                    />
                </div>
            )}

            {deleteDialogVisibility && (
                <DialogModal
                    confirmationHandler={() => {
                        deleteUserData(userDataState.id)
                        setDeleteDialogVisibility(false)
                    }}
                    cancelHandler={() => setDeleteDialogVisibility(false)}
                    setVisibility={setDeleteDialogVisibility}
                />
            )}
        </div>
    )
}
export default AccordionFooter
