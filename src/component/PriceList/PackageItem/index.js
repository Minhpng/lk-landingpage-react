import clsx from 'clsx'

import styles from './PackageItem.module.scss'
import Button from '../../Button';
import images from '../../../assets/img';




function PackageItem({ packageInfo }) {

    const { name, desc, bestseller, price } = packageInfo


    const packageDesc = desc.map((item, index) => {
        const checkIcon = item.value ? images.checkIcon : images.crossIcon
        return (
            <li key={index} className={clsx(styles.listItem)}>
                <div className={clsx(styles.icon)}><img src={checkIcon} alt="" /></div>
                <p className={clsx(styles.content)}>{item.descItem}</p>
            </li>
        )
    })

    return (
        <div className={clsx(styles.wrapper)}>
            <h2>
                {name}
                {bestseller && <span>Bestseller</span>}
            </h2>
            <div className={clsx(styles.descWrapper)}>
                <p className={clsx(styles.text)}>Gồm:</p>
                <ul className={clsx(styles.listWrapper)}>
                    {packageDesc}
                </ul>
                <p className={clsx(styles.price)}><span>{price.oldPrice}</span> {price.newPrice}</p>
                <Button className={clsx(styles.btn, { [styles.btnSecondary]: !bestseller })}>Thanh toán</Button>
            </div>
        </div>
    );
}

export default PackageItem;