import clsx from "clsx";
import { useRef, useState } from "react";

import Button from "../../Button";
import QuestionResult from "../QuestionResult/";
import styles from "./QuestionElement.module.scss";

import bellRight from '../../../assets/audio/bell-right.mp3';
import bellWrong from '../../../assets/audio/bell-wrong.mp3';

const rightSound = new Audio(bellRight)
const wrongSound = new Audio(bellWrong)


const exercisePackage = [
    {
        questionName: 'Tôi đi học bằng xe đạp mỗi ngày',
        answers: ['I go to school by bike every day'],
        explaination: 'Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa. Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa. '
    },
    {
        questionName: 'Có gì đó trong mắt của tôi',
        answers: ["There's something in my eyes", "There is something in my eyes"],
        explaination: "“There is” dùng với một đại từ hay danh từ số ít để chỉ cái gì đó tồn tại hay xảy ra ở hiện tại. Đại từ “something” là “cái gì đó”, cái hay thứ mà bạn không biết. Dùng giới từ “in” để chỉ vị trí bên trong cái gì: “in my eye” là “trong mắt tôi”. There’s something in my eye! Có cái gì đó trong mắt tôi ấy! Dùng câu cảm thán, kết thúc bằng dấu chấm than, để truyền đạt một cảm xúc mạnh mẽ. Do có gì đó bay hay lọt vào mắt bạn một cách đột ngột nên bạn đã la lên do khó chịu hay hoảng loạn, chẳng hạn."
    },
    {
        questionName: 'Bạn cảm thấy thế nào?',
        answers: ["How are you feeling?",
            "How do you feel?",],
        explaination: 'Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa. Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa. '
    },
    {
        questionName: 'Bạn ổn chứ?',
        answers: ["Are you alright?", "Are you ok?", "Are you okay?"],
        explaination: 'Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa. Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa. '
    },
    {
        questionName: 'Tôi ổn, cảm ơn',
        answers: ["I am fine, thanks", "I'm fine, thanks"],
        explaination: 'Lorem ipsum dolor sit amet consectetur. Fusce dolor enim sapien id vestibulum dui habitant sem donec. Viverra malesuada dictum quam adipiscing. Dignissim at vulputate nisl ultricies vitae massa.'
    },
]


function QuestionElement({ action }) {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isSubmited, setSubmit] = useState(false)
    const [isAnswerRight, setCheckAnswer] = useState(null)
    const [answer, setAnswer] = useState('')

    const [userInput, setUserInput] = useState('')

    const explanation = exercisePackage[currentQuestion].explaination

    const userInputRef = useRef()

    const eliminateSpecialChar = (strings) => {
        const newStrings = strings.replace(/,|\.|\?|!/g, '')
        return newStrings
    }

    const handleSubmit = () => {
        const userAnswer = eliminateSpecialChar(userInputRef.current.value.trim().toLowerCase())

        if (!userAnswer) return

        setSubmit(true)
        userInputRef.current.disabled = true

        const newAnswers = exercisePackage[currentQuestion].answers.map(item => eliminateSpecialChar(item.toLowerCase().trim()))
        const isRight = newAnswers.indexOf(userAnswer) !== -1
        setAnswer(() => {
            const answer = exercisePackage[currentQuestion].answers[newAnswers.indexOf(userAnswer)]
            if (answer && answer !== -1) {
                return answer
            } else {
                console.log(exercisePackage[currentQuestion].answers[0])
                return exercisePackage[currentQuestion].answers[0]
            }
        })
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
                {!isSubmited ? <p className={clsx(styles.userInputCta)}>Gõ câu trả lời của bạn vào ô trên và bấm Nộp bài!</p> : null}
            </div>
            {isSubmited && <QuestionResult isRight={isAnswerRight} answer={answer} explanation={explanation} />}
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