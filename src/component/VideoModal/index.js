import clsx from 'clsx';
import { useEffect } from 'react';
import { useState } from 'react';
import images from '../../assets/img'
import PriceList from '../PriceList';
import RequireLogin from '../PriceList/RequireLogin';
import VideoWrapper from '../VideoWrapper';

import styles from './VideoModal.module.scss';

function VideoModal({ closeModal }) {

    const [login, setLogin] = useState({
        inProcess: false,
        isLogin: false,
    })

    useEffect(() => {
        if (login.inProcess) {
            const x = setTimeout(() => {
                setLogin({
                    inProcess: false,
                    isLogin: true,
                })
            }, 2000)
            return () => {
                clearTimeout(x)
            }
        }
    }, [login.inProcess])

    return (
        <div
            className={clsx(styles.video)}>
            <VideoWrapper
                posterUrl={images.videoThumbnail}
                videoUrl='https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4'
            />
            <div className={clsx(styles.video__bodyWrapper)}>
                {(login.inProcess &&
                    <div className="loader"></div>)
                    ||
                    (login.isLogin
                        ? <PriceList />
                        : <RequireLogin action={setLogin} />)
                }
            </div>
        </div>
    );
}

export default VideoModal;
