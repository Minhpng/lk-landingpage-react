import clsx from 'clsx';
import styles from './Header.module.scss';

import images from '../../assets/img'
import Button from '../Button';

function Header() {


    return (
        <header>
            <div className={clsx('container', styles.wrapper)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo.default} alt="logo" className={clsx("main-logo")} />
                </div>
                <div className={clsx("header-action")}>
                    <Button>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;