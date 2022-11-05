import clsx from 'clsx'

import images from '../../../assets/img'
import styles from './RequireLogin.module.scss'

function RequireLogin() {
    return (
        <div className="ask-for-login">
            <h3 className="fs-sec-heading fw-semi-bold">Đăng nhập để xem mức giá đặc biệt của của bạn!</h3>
            <button className="btn">Đăng nhập và nhận ưu đãi</button>
            <div className="support text-center">
                <p className="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                <div className="support-phone-wrapper">
                    <div className="support-icon">
                        <svg className="icon"><use xlinkHref={`${images.supportIcon.default}#supportIcon`}></use></svg>
                    </div>
                    <a className="support-phone-number" href="tel:+84973979109">097 397 9109</a>
                </div>
            </div>
        </div>
    );
}

export default RequireLogin;


