import clsx from 'clsx'

import images from '../../../assets/img'
import Button from '../../Button';
import Support from '../../Support';
import styles from './RequireLogin.module.scss'



function RequireLogin({ action }) {

    const handleLogin = () => {
        action(prev => ({ ...prev, inProcess: true }))
    }
    return (
        <>
            <div className={clsx(styles.requireLogin)}>
                <h3 className="fs-sec-heading fw-semi-bold">Đăng nhập để xem mức giá đặc biệt của của bạn!</h3>
                <Button onClick={handleLogin} className={clsx(styles.btn)}>Đăng nhập và nhận ưu đãi</Button>
                <Support />
            </div>

        </>
    );
}

export default RequireLogin;



