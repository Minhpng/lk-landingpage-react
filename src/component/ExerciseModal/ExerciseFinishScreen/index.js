import clsx from "clsx"

import images from "../../../assets/img";
import Button from "../../Button";
import VideoWrapper from "../../VideoWrapper";
import styles from "./ExerciseFinishScreen.module.scss"

function ExerciseFinishScreen() {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.desc)}>Bạn trả lời đúng bao nhiêu câu?
            </p>
            <p className={clsx(styles.desc)}>Nếu các câu đơn giản này bạn chưa nói chính xác được, thì bạn nên xem 1 lần hết video này!
            </p>

            <VideoWrapper
                posterUrl={images.videoThumbnail}
                videoUrl='https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4'
            />
            <Button className={clsx(styles.btn)}>Không, tôi chỉ muốn học thử ngay!</Button>
        </div>
    );
}

export default ExerciseFinishScreen;