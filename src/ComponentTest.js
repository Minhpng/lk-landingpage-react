import clsx from 'clsx'
import styles from './test.module.scss'

function Button({
    primary,
    rounded,
    children
}) {

    console.log(primary);

    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.rounded]: rounded
    })
    return (<button className={classes}>{children}</button>);
}

export default Button;