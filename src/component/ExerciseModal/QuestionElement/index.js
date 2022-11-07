import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import Button from "../../Button";
import styles from "./QuestionElement.module.scss"
import QuestionResult from "../QuestionResult/";

import bellRight from '../../../assets/audio/bell-right.mp3'
import bellWrong from '../../../assets/audio/bell-wrong.mp3'

const rightSound = new Audio(bellRight)
const wrongSound = new Audio(bellWrong)


const exercisePackage = [
    {
        questionName: 'Tôi đi học bằng xe đạp mỗi ngày',
        answers: [
            'I go to school by bike every day'
        ],
    },
    {
        questionName: 'Có gì đó trong mắt của tôi',
        answers: ["There's something in my eyes",]
    },
    {
        questionName: 'Bạn cảm thấy thế nào?',
        answers: ["How are you feeling?",
            "How do you feel?"
        ]
    },
    {
        questionName: 'Bạn ổn chứ?',
        answers: ["Are you alright?", "Are you ok?", "Are you okay?"]
    },
    {
        questionName: 'Tôi ổn, cảm ơn',
        answers: ["I am fine, thanks", "I'm fine, thanks"]
    },
]


function QuestionElement({ action }) {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isSubmited, setSubmit] = useState(false)
    const [isAnswerRight, setCheckAnswer] = useState(null)

    const [userInput, setUserInput] = useState('')

    let answer = exercisePackage[currentQuestion].answers
    const userInputRef = useRef()

    useEffect(() => {
        userInputRef.current.focus()
    }, [])

    const handleSubmit = () => {
        const userAnswer = userInputRef.current.value.trim().toLowerCase()
        if (!userAnswer) return

        setSubmit(true)
        userInputRef.current.disabled = true

        const newAnswers = answer.map(item => item.toLowerCase().trim())
        const isRight = newAnswers.indexOf(userAnswer) !== -1
        action.setCheckAnswer({
            isRight: isRight,
            isWrong: !isRight
        })

        if (isRight) {
            setCheckAnswer(true)
            rightSound.play()
        } else {
            setCheckAnswer(false)
            wrongSound.play()
        }
    }

    const handleInput = (e) => {
        if (!isSubmited) {
            setUserInput(e.target.value)
        }
        return
    }

    const showNextQuestion = () => {
        setUserInput('')
        userInputRef.current.disabled = false
        userInputRef.current.focus()
        action.setCheckAnswer({})

        if (currentQuestion < exercisePackage.length - 1) {
            setCurrentQuestion(prev => prev + 1)
            setSubmit(false)
        } else {
            action.setExerciseState(4)
        }
    }

    const classes = clsx(styles.wrapper)


    return (
        <div className={classes}>
            <div className={clsx(styles.questionNumber)}>
                Câu: {currentQuestion + 1}/{exercisePackage.length}
            </div>
            <div className={clsx(styles.questionTitle)}>{exercisePackage[currentQuestion].questionName}</div>
            <div className={clsx(styles.userInput)}>
                <input
                    ref={userInputRef}
                    type="text"
                    placeholder="Dịch câu trên sang tiếng Anh..."
                    rows="4"
                    onKeyUp={(e) => { !isSubmited && e.key === 'Enter' && handleSubmit() }}
                    onChange={(e) => { handleInput(e) }} value={userInput} />
                <p className={clsx(styles.userInputCta)}>Gõ câu trả lời của bạn vào ô trên và bấm Nộp bài!</p>
            </div>
            {isSubmited && <QuestionResult isRight={isAnswerRight} answer={answer[0]} />}
            <div className={clsx(styles.btnWrapper)}>
                {isSubmited
                    ? <Button onClick={showNextQuestion} className={clsx(styles.submitAnwswer)}>
                        Tiếp theo
                    </Button>
                    : <Button
                        onClick={handleSubmit}
                        className={clsx(styles.submitAnwswer)}>
                        Kiểm tra
                    </Button>}
                <Button btnNoBg>Tôi muốn bỏ qua và học thử ngay</Button>
            </div>
        </div >
    );
}

export default QuestionElement;