import clsx from 'clsx';
import { useState } from 'react';
import images from '../../assets/img'
import PriceList from '../PriceList';
import RequireLogin from '../PriceList/RequireLogin';

import styles from './VideoModal.module.scss';





function VideoModal({ closeModal }) {

    const [isLogin, setLogin] = useState(false)

    return (
        <div
            className={clsx(styles.video)}>
            <div className={clsx(styles.video__wrapper)}>
                <video
                    video-controler
                    autoPlay={false}
                    controls
                    poster={images.videoThumbnail}
                    src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                    type="video/mp4"
                ></video>
            </div>
            <div className={clsx(styles.video__bodyWrapper)}>
                {isLogin
                    ? <RequireLogin />
                    : <PriceList />
                }
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