import clsx from 'clsx';

import styles from './QuestionResult.module.scss';


function QuestionResult({ isRight, answer, explanation }) {
    let element

    console.log(answer);


    if (isRight) {
        element = (<>
            <p className={clsx(styles.answerResult)}>Đúng rồi! Hay quá!</p>
            <div className={clsx(styles.resultWrapper)}>
                <div className={clsx(styles.desc)}>Đáp án:</div>
                <div className={clsx(styles.answer)}>{answer}</div>
                <div className={clsx(styles.desc)}>Giải thích:</div>
                <div className={clsx(styles.explanation)}>{explanation}</div>
            </div>
        </>
        )
    } else {
        element = (
            <div className={clsx(styles.resultWrapper)}>
                <div className={clsx(styles.desc)}>Đáp án:</div>
                <div className={clsx(styles.answer)}>{answer}</div>
                <div className={clsx(styles.desc)}>Giải thích:</div>
                <div className={clsx(styles.explanation)}>{explanation}</div>
            </div>
        )
    }

    return element
}

export default QuestionResult;