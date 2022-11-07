import clsx from 'clsx'
import { useState } from 'react'
import images from '../../assets/img'

import styles from './ExerciseModal.module.scss'
import ExerciseWelcomeScreen from './ExerciseWelcomeScreen'
import QuestionElement from './QuestionElement'
import ExerciseFinishScreen from './ExerciseFinishScreen'

import CountdownCirle from '../Countdown/CountdownCirle'
import Countdown from 'react-countdown'

function ExerciseModal() {
    const [exerciseState, setExerciseState] = useState(1)

    const [checkAnswer, setCheckAnswer] = useState({
        isRight: false,
        isWrong: false
    })
    const handleCountdownEnd = () => {
        setExerciseState(3)
    }

    const classes = clsx(styles.exerciseWrapper, {
        [styles.correct]: checkAnswer.isRight,
        [styles.incorrect]: checkAnswer.isWrong
    })

    return (
        <div className={classes}>
            {exerciseState === 1 && <ExerciseWelcomeScreen action={setExerciseState} />}
            {exerciseState === 2 && <Countdown onComplete={handleCountdownEnd} renderer={CountdownCirle} date={Date.now() + 3000} />}
            {exerciseState === 3 && <QuestionElement action={{ setExerciseState, setCheckAnswer }} />}
            {exerciseState === 4 && <ExerciseFinishScreen />}
        </div>
    );
}


export default ExerciseModal;