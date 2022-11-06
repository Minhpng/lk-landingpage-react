import clsx from "clsx";
import { useRef, useState } from "react";

import Button from "../../Button";
import styles from "./QuestionElement.module.scss"
import QuestionResult from "../QuestionResult/";

function QuestionElement({ currentQuestion, exercisePackage }) {
    let answer = exercisePackage[currentQuestion].answer
    const [checkAnswer, setCheckAnswer] = useState(null)

    const userInputRef = useRef()

    const handSubmit = () => {
        if (userInputRef.current.value === answer) {
            setCheckAnswer(true)
        }
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.questionNumber)}>
                Câu: {currentQuestion + 1}/{exercisePackage.length}
            </div>
            <div className={clsx(styles.questionTitle)}>{exercisePackage[currentQuestion].questionName}</div>
            <div className={clsx(styles.userInput)}>
                <input ref={userInputRef} type="text" placeholder="Dịch câu trên sang tiếng Anh..." rows="4" />
                <p className={clsx(styles.userInputCta)}>Gõ câu trả lời của bạn vào ô trên và bấm Nộp bài!</p>
            </div>
            {/* {isChecked && <QuestionResult />} */}
            <div className={clsx(styles.btnWrapper)}>
                <Button onClick={handSubmit} className={clsx(styles.submitAnwswer)}>Kiểm tra</Button>
                <Button btnNoBg>Tôi muốn bỏ qua và học thử ngay</Button>
            </div>
        </div >
    );
}

export default QuestionElement;