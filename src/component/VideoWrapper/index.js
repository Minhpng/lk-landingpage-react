import clsx from 'clsx'

import styles from './VideoWrapper.module.scss'

function VideoWrapper({ posterUrl, videoUrl }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <video
                video-controler
                autoPlay={false}
                controls
                poster={posterUrl}
                src={videoUrl}
                type="video/mp4"
            ></video>
        </div>
    );
}

export default VideoWrapper;