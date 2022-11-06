import clsx from "clsx";
import styles from './Testimonials.module.scss'
import images from '../../assets/img'



function Testimonials() {
    return (
        <section className={clsx(styles.testimonial)}>
            <div className={clsx("container", styles.container)}>
                <h1 className={clsx("fs-primary-heading fw-bold")}>Hãy nghe những người đi trước nói gì?</h1>
            </div>

            <div className={clsx(styles.wrapper)}>
                <div className={clsx("")}>
                    <div className={clsx(styles.image)}>
                        <img src={images.bigScreenReviewImage} alt="review" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;