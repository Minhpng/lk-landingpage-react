import clsx from 'clsx'

import styles from './Button.module.scss'

function Button({
    children,
    to,
    href,
    primary,
    rounded,
    ...passProps
}) {

    let Comp = 'button'

    const _props = {
        ...passProps
    }

    if (href) {
        Comp = 'a'
        _props.href = href
    }

    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.rounded]: rounded
    })

    return (
        <Comp className={classes} {..._props}>
            {children}
        </Comp>
    );
}

export default Button;