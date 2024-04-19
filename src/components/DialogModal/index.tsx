import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface DialogModalProps {
    confirmationHandler: () => void
    cancelHandler?: () => void
    visibility?: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogModal: React.FC<DialogModalProps> = ({
    confirmationHandler,
    cancelHandler,
    setVisibility,
}) => {
    // const confirmationHandler = () => {}
    // const cancelHandler = () => {}

    return (
        <div className={styles.dialog_modal_wrapper}>
            <div className={styles.backdrop}></div>
            <div className={styles.dialog_modal}>
                <p>Are you sure you want to delete?</p>
                <div className={styles.button_group}>
                    <button onClick={cancelHandler}>Cancel</button>
                    <button
                        onClick={confirmationHandler}
                        className={styles.delete}
                    >
                        Delete
                    </button>
                </div>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.close_dialog_modal}
                    onClick={() => setVisibility(false)}
                />
            </div>
        </div>
    )
}
export default DialogModal
