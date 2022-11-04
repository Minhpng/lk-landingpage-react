import clsx from "clsx"

import styles from './GiftSection.module.scss'

function GiftSection() {
    return (
        <section className={clsx("section", styles.wrapper)}>
            <div className={clsx("container", styles.inner)}>
                <div>
                    <h1 className={clsx("fs-primary-heading fw-bold mb10")}>
                        Quà tặng đặc biệt để học lần này là giỏi tiếng Anh toàn diện*:
                    </h1>
                    <p className={clsx("text-red fs-body")}>*Chỉ dành tặng cho những người đặc biệt (công bố cuối video)!</p>
                    <ul className={clsx("list=wrapper")}>
                        <li className={clsx("list-item-number")}>
                            <span className={clsx("number-list")}>1</span>
                            <p className={clsx("list-content fs-md")}>
                                Khoá học: "10 ngày nắm vững phát âm IPA giọng bản xứ và đọc làu làu từ điển."
                                <span className={clsx("inline")}>Trị giá: <span className={clsx("strike")}>2.000.000 VNĐ</span></span>
                            </p>
                        </li>
                        <li className={clsx("list-item-number")}>
                            <span className={clsx("number-list")}>2</span>
                            <p className={clsx("list-content fs-md")}>
                                Khóa học: "60 điểm ngữ pháp lấy lại tất tần tật căn bản tiếng Anh!"
                                <span className={clsx("inline")}>Trị giá: <span className={clsx("strike")}>2.000.000 VNĐ</span></span>
                            </p>
                        </li>
                    </ul>
                </div >
            </div>
        </section>
    );
}

export default GiftSection;