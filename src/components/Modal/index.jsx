import styles from './modal.module.css';

//icons
import { CgClose } from "react-icons/cg";

function Modal({ children, isOpen = false, setIsOpen }) {

  if (!isOpen) {
    return null
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.bg}>
      <div className='container'>
        <div className={styles.content}>
          <CgClose onClick={handleClose} className={styles.close} size='15px' />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
