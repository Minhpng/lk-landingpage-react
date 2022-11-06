import clsx from 'clsx';

import images from '../../../assets/img';
import Button from '../../Button';
import styles from './ExerciseWelcomeScreen.module.scss'

function ExerciseWelcomeScreen({ action }) {
    const startExercise = () => {
        action(prev => ({
            ...prev,
            onCoundownScreen: true,
            onWelcomeScreen: false
        }))
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.image)}>
                <img src={images.exerciseIntro} alt="do you speak english?" />
            </div>
            <h1 className={clsx(styles.title)}>Khoan đã</h1>
            <p className={clsx(styles.desc)}>Hãy thử nói vài câu để kiểm tra trình độ của bạn trước nhé?
            </p>
            <div className={clsx(styles.btnWrapper)}>
                <p className={clsx(styles.cta)}>Bạn đã sẵn sàng chưa?</p>
                <Button onClick={startExercise} className={clsx(styles.btn)}>Bắt đầu</Button>
            </div >
        </div>
    );
}

export default ExerciseWelcomeScreen;