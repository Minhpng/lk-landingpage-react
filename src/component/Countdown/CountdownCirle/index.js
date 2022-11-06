import clsx from 'clsx';

import styles from './CountdownCirle.module.scss'

function CountdownCirle({ seconds, completed }, isStarting) {

    if (completed) {
        console.log(isStarting);
    }

    return (
        <>
            {!completed && <div className={clsx(styles.circle)} style={{
                '--timeEnd': `${seconds}s`
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