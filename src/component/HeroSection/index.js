import clsx from 'clsx'
import Button from '../Button';
import styles from './HeroSection.module.scss';

function Showcase({ action }) {

    const openModal = () => {
        action(prev => {
            prev.isExerciseModal = true
            return { ...prev }
        })
    }
    return (
        <section className={clsx(styles.hero)}>
            <div className={clsx('container')}>
                <h1 className={clsx(styles.heading)}>
                    Hãy <span>khoan</span>
                </h1>
                <h3 className={clsx('fs-sec-heading fw-sm-bold', styles.description)}>
                    Đừng bấm nút học thử nếu bạn chưa biết cách!
                </h3>
                <Button onClick={openModal}>Học thử ngay</Button>
            </div>
        </section>
    );
}

export default Showcase;