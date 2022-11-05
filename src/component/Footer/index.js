import clsx from 'clsx';
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer>
            <div className="container">
                <h1>Lang Kingdom</h1>
                <p>470 North Bridge Road, <span className="inline">#05-12 Bugis Cube,</span> Singapore (188735)</p>
                <p>
                    <i className="far fa-registered icon"></i>
                    2022 Lang Kingdom Pte. Ltd. <span className="inline">All Rights Reserved.</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;