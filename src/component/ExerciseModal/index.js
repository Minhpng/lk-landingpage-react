import clsx from 'clsx'
import { useState } from 'react'
import { useEffect } from 'react'

import images from '../../assets/img'
import styles from './ExerciseModal.module.scss'
import ExerciseWelcomeScreen from './ExerciseWelcomeScreen'
import QuestionElement from './QuestionElement'

import CountdownCirle from '../Countdown/CountdownCirle'
import Countdown from 'react-countdown'


const exercisePackage = [
    {
        questionName: 'Tôi đi học bằng xe đạp mỗi ngày',
        answer: 'I go to school by bike every day',
    },
    {
        questionName: 'Có gì đó trong mắt của tôi',
        answer: "There's something in my eyes",
    },
    {
        questionName: 'Bạn cảm thấy thế nào?',
        answer: "How are you feeling?",
    },
    {
        questionName: 'Bạn ổn chứ?',
        answer: "Are you alright?",
    },
    {
        questionName: 'Tôi ổn, cảm ơn',
        answer: "I am fine, thanks",
    },
]


function ExerciseModal() {
    const [exerciseState, setExerciseState] = useState({
        onWelcomeScreen: true,
        onCoundownScreen: false,
        onExerciseStart: false
    })

    let currentQuestion = 0

    const { onWelcomeScreen, onCoundownScreen, onExerciseStart } = exerciseState

    const handleCountdownEnd = () => {
        setExerciseState(prev => ({
            ...prev,
            onCoundownScreen: false,
            onExerciseStart: true,
        }))
    }
    return (
        <div className={clsx(styles.exerciseWrapper)}>
            {onWelcomeScreen && <ExerciseWelcomeScreen action={setExerciseState} />}
            {onCoundownScreen && <Countdown onComplete={handleCountdownEnd} renderer={CountdownCirle} date={Date.now() + 3000} />}
            {onExerciseStart && <QuestionElement currentQuestion={currentQuestion} exercisePackage={exercisePackage} />}

        </div>
    );
}


export default ExerciseModal;