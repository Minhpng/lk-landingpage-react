import clsx from 'clsx';

import styles from './QuestionResult.module.scss';


function QuestionResult({ isRight, answer }) {
    let element


    if (isRight) {
        element = <p className={clsx(styles.answerResult)}>Đúng rồi! Hay quá!</p>
    } else {
        element = (
            <div className={clsx(styles.resultWrapper)}>
                <div className={clsx(styles.desc)}>Đáp án:</div>
                <div className={clsx(styles.answer)}>{answer}</div>
            </div>
        )
    }

    return element
}

export default QuestionResult;