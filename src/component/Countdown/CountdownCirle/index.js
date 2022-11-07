import clsx from 'clsx';

import styles from './CountdownCirle.module.scss'
import count from '../../../assets/audio/count.mp3'
import finishCount from '../../../assets/audio/finishCount.mp3'

const countSound = new Audio(count)
const finishCountSound = new Audio(finishCount)
function CountdownCirle({ seconds, completed }) {

    if (!completed) countSound.play()

    if (completed) finishCountSound.play()


    return (
        <>
            {!completed && <div className={clsx(styles.circle)} style={{
                '--timeEnd': `3s`
            }}>
                <div className={clsx(styles.countdownNumber)}>{seconds}</div>
                <svg>
                    <circle r="145" cx="150" cy="150"></circle>
                </svg>
            </div>}
        </>
    );
}

export default CountdownCirle;