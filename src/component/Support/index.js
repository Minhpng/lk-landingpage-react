import clsx from 'clsx'

import styles from './Support.module.scss'
import images from '../../assets/img'

function Support({ isLogin }) {
    return (
        <>
            <div className={clsx(styles.support)}>
                <p className={clsx(styles.desc)}>Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                <div className={clsx(styles.phoneWrapper)}>
                    <div className={clsx(styles.icon)}>
                        <svg className="icon"><use xlinkHref={`${images.supportIcon.default}#supportIcon`}></use></svg>
                    </div>
                    <a className={clsx(styles.phoneNumber)} href="tel:+84973979109">097 397 9109</a>
                </div>
            </div>
            {isLogin &&
                <div className={clsx(styles.requestSupport)} >
                    <p className={clsx(styles.requestDesc)}>
                        Hoặc gửi yêu cầu đến nhân viên hỗ trợ
                    </p>
                    <a href="#">Bấm gửi yêu cầu</a>
                </div>
            }
        </>
    )
}

export default Support