import clsx from 'clsx';

import styles from './VideoModal.module.scss';


function VideoModal({ closeModal }) {

    return (
        <div
            className={clsx(styles.video)}>
            <div className={clsx(styles.video__wrapper)}>
                <video
                    video-controler
                    autoPlay={true}
                    controls
                    poster="./img/video-hero-thumbnail.png"
                    src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                    type="video/mp4"
                ></video>
            </div>
            <div className={clsx(styles.video__bodyWrapper)}>
                hello
            </div>
        </div>
    );
}

export default VideoModal;
/*
<div
    style="display: none;"
    className="modal-video">
    <div className="video-wrapper">
        <video
            video-controler
            autoplay
            controls
            poster="./img/video-hero-thumbnail.png"
            src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
            type="video/mp4"
        ></video>
    </div>
    <div className="modal-body">
        <div className="ask-for-login">
            <h3 className="fs-sec-heading fw-semi-bold">Đăng nhập để xem mức giá đặc biệt của của bạn!</h3>
            <button className="btn">Đăng nhập và nhận ưu đãi</button>
            <div className="support text-center">
                <p className="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                <div className="support-phone-wrapper">
                    <div className="support-icon">
                        <svg className="icon">
                            <use xlink:href="./img/support-icon.svg#support-icon"></use>
                        </svg>
                    </div>
                    <a className="support-phone-number" href="tel:+84973979109">097 397 9109</a>
                </div>
            </div>
        </div>

        <div className="price-list">
            <h2 className="fs-sec-heading fw-bold text-center">Mức giá ưu đãi dành riêng cho bạn
                <br>Chỉ 1 lần duy nhất</br>
            </h2>
            <div className="countdown">
                <div className="countdown__heading">Ưu đãi kết thúc sau:</div>
                <div className="countdown__clock-wrapper">
                    <div className="countdown__number-wrapper">
                        <span className="countdown-number">02</span>
                        <span className="countdown-prefix">Ngày</span>
                    </div>
                    <div className="countdown__number-wrapper">
                        <span className="countdown-number">12</span>
                        <span className="countdown-prefix">Giờ</span>
                    </div>
                    <div className="countdown__number-wrapper">
                        <span className="countdown-number">20</span>
                        <span className="countdown-prefix">Phút</span>
                    </div>
                    <div className="countdown__number-wrapper">
                        <span className="countdown-number">11</span>
                        <span className="countdown-prefix">Giây</span>
                    </div>
                </div>
            </div>
            <p className="choose-package-cta">Chọn gói thanh toán</p>
            <div className="package-wrapper">
                <div className="package-item">
                    <h2>
                        Gói đặc biệt
                        <span>Bestseller</span>
                    </h2>
                    <div className="package-desc">
                        <p className="desc-text">Gồm:</p>
                        <ul className="package-desc__list">
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">2 năm học</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">Thêm 6 tháng học</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">Khoá 10 ngày phát âm</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">Khóa lấy lại căn bản</p>
                            </li>
                        </ul>
                        <p className="package-price"><span>6,120,000 VNĐ</span> 1,290,000 VNĐ</p>
                        <button className="btn">Thanh toán</button>
                    </div>
                </div>
                <div className="package-item">
                    <h2>
                        Gói 2 năm
                    </h2>
                    <div className="package-desc">
                        <p className="desc-text">Gồm:</p>
                        <ul className="package-desc__list">
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">2 năm học</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-cross.svg" alt=""></div>
                                <p className="package-desc__content">Thêm 6 tháng học</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-cross.svg" alt=""></div>
                                <p className="package-desc__content">Khoá 10 ngày phát âm</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-cross.svg" alt=""></div>
                                <p className="package-desc__content">Khóa lấy lại căn bản</p>
                            </li>
                        </ul>
                        <p className="package-price"><span>6,120,000 VNĐ</span> 1,290,000 VNĐ</p>
                        <button className="btn btn-secondary">Thanh toán</button>
                    </div>
                </div>
                <div className="package-item">
                    <h2>
                        Gói 1 năm tặng 3 tháng
                    </h2>
                    <div className="package-desc">
                        <p className="desc-text">Gồm:</p>
                        <ul className="package-desc__list">
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">1 năm học</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-check.svg" alt=""></div>
                                <p className="package-desc__content">Thêm 3 tháng học</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-cross.svg" alt=""></div>
                                <p className="package-desc__content">Khoá 10 ngày phát âm</p>
                            </li>
                            <li className="package-desc__item">
                                <div className="package-desc__icon"><img src="./img/list-cross.svg" alt=""></div>
                                <p className="package-desc__content">Khóa lấy lại căn bản</p>
                            </li>
                        </ul>
                        <p className="package-price"><span>6,120,000 VNĐ</span> 1,290,000 VNĐ</p>
                        <button className="btn btn-secondary">Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="support text-center">
            <p className="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
            <div className="support-phone-wrapper">
                <div className="support-icon">
                    <svg className="icon">
                        <use xlink:href="./img/support-icon.svg#support-icon"></use>
                    </svg>
                </div>
                <a className="support-phone-number" href="tel:+84973979109">097 397 9109</a>
            </div>
        </div>
        <div className="request-support">
            <p className="request-support__desc">
                Hoặc gửi yêu cầu đến nhân viên hỗ trợ
            </p>
            <a href="#">Bấm gửi yêu cầu</a>
        </div>
    </div>
</div>

*/