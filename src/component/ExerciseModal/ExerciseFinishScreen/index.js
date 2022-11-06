import images from "../../../assets/img";
import Button from "../../Button";
import VideoWrapper from "../../VideoWrapper";

function ExerciseFinishScreen() {
    return (
        <div className="wrapper">
            <p className="desc">Bạn trả lời đúng bao nhiêu câu?
            </p>
            <p className="desc">Nếu các câu đơn giản này bạn chưa nói chính xác được, thì bạn nên xem 1 lần hết video này!
            </p>

            <VideoWrapper
                posterUrl={images.videoThumbnail}
                videoUrl='https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4'
            />
            <Button>Không, tôi chỉ muốn học thử ngay!</Button>
        </div>
    );
}

export default ExerciseFinishScreen;