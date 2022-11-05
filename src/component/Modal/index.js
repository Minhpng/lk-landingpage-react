import clsx from 'clsx'
import styles from './Modal.module.scss'

function Modal({ children, closeModal }) {

    const handleClose = () => {
        closeModal(prev => {
            Object.keys(prev).forEach(key => prev[key] = false)
            return { ...prev }
        })
    }

    return (
        <div className={clsx(styles.modal)} role="dialog" >
            <div div className={clsx(styles.wrapper)} role="document" >
                <div className={clsx(styles.content)}>
                    <div onClick={handleClose} className={clsx(styles.closeBtn)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    {children}
                </div>
            </div>
        </div >
    );
}

export default Modal;

