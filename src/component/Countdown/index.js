import clsx from 'clsx';
import { zeroPad } from 'react-countdown'
import { useState, useEffect } from 'react';



import styles from './Countdown.module.scss';

function Countdown({ days, hours, minutes, seconds }) {


    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.heading)}>Ưu đãi kết thúc sau:</div>
            <div className={clsx(styles.clockWrapper)}>
                <div className={clsx(styles.numberWrapper)}>
                    <span className={clsx(styles.number)}>{zeroPad(days)}</span>
                    <span className={clsx(styles.prefix)}>Ngày</span>
                </div>
                <div className={clsx(styles.numberWrapper)}>
                    <span className={clsx(styles.number)}>{zeroPad(hours)}</span>
                    <span className={clsx(styles.prefix)}>Giờ</span>
                </div>
                <div className={clsx(styles.numberWrapper)}>
                    <span className={clsx(styles.number)}>{zeroPad(minutes)}</span>
                    <span className={clsx(styles.prefix)}>Phút</span>
                </div>
                <div className={clsx(styles.numberWrapper)}>
                    <span className={clsx(styles.number)}>{zeroPad(seconds)}</span>
                    <span className={clsx(styles.prefix)}>Giây</span>
                </div>
            </div>
        </div>
    )
}

export default Countdown