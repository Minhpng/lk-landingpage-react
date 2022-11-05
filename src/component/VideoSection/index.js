import clsx from 'clsx'

import styles from './VideoSection.module.scss'
import images from "../../assets/img";
import VideoModal from '../VideoModal';
import { useState } from 'react';


function VideoWrapperBox() {

    const [isVideoPopupOpen, setVideoPopupOpen] = useState(false)

    const openModal = () => {
        setVideoPopupOpen(true)
    }

    return (
        <>
            <div className={clsx('container')}>
                <div className={clsx(styles.videoBox)}>
                    <h3 className={clsx('fs-sec-heading fw-sm-bold')}>
                        Chỉ cần 83 phút xem video này, dám cá 100% bạn sẽ giỏi tiếng Anh giao tiếp, dù bạn có nằm mơ cũng không thể
                        tin!
                    </h3>
                    <div onClick={openModal} className={clsx(styles.videoWrapper)}>
                        <div className={clsx(styles.playBtn)}>
                            <svg>
                                <use xlinkHref={`${images.playBtnIcon.default}#play-btn`}></use>
                            </svg>
                        </div>
                        <img src={images.videoThumbnail} alt="video thumbnail" tabIndex={-1} />
                    </div>
                </div>
            </div>
            {isVideoPopupOpen && <VideoModal closeModal={setVideoPopupOpen} />}
        </>
    )
}

export default VideoWrapperBox;