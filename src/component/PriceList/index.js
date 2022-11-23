import clsx from 'clsx'
import Countdown from 'react-countdown'

import { default as CountdownElement } from '../Countdown'
import Support from '../Support'
import PackageItem from './PackageItem'
import styles from './PriceList.module.scss'


const packages = [
    {
        name: 'Gói đặc biệt',
        desc: [
            { descItem: '2 năm học', value: true },
            { descItem: 'Thêm 6 tháng họ', value: true },
            { descItem: 'Khoá 10 ngày phát âm', value: true },
            { descItem: 'Khóa lấy lại căn bản', value: true },
        ],
        bestseller: true,
        price: {
            oldPrice: '6,120,000 VNĐ',
            newPrice: '1,290,000 VNĐ',
        }
    },
    {
        name: 'Gói 2 năm',
        desc: [
            { descItem: '2 năm học', value: true },
            { descItem: 'Thêm 6 tháng họ', value: false },
            { descItem: 'Khoá 10 ngày phát âm', value: false },
            { descItem: 'Khóa lấy lại căn bản', value: false },
        ],
        bestseller: false,
        price: {
            oldPrice: '6,120,000 VNĐ',
            newPrice: '1,290,000 VNĐ',
        }
    },
    {
        name: 'Gói 1 năm tặng 3 tháng',
        desc: [
            { descItem: '2 năm học', value: true },
            { descItem: 'Thêm 3 tháng họ', value: true },
            { descItem: 'Khoá 10 ngày phát âm', value: false },
            { descItem: 'Khóa lấy lại căn bản', value: false },
        ],
        bestseller: false,
        price: {
            oldPrice: '1,290,000 VNĐ',
            newPrice: '890,000 VNĐ',
        }
    },
]

function PriceList() {

    const compact = 'compact'
    return (
        <div className={clsx(styles.listWrapper)}>
            <h2 className="fs-sec-heading fw-bold text-center">Mức giá ưu đãi dành riêng cho bạn
                <br />Chỉ 1 lần duy nhất
            </h2>
            <Countdown compact={false} renderer={CountdownElement} date='2022-11-31T00:00:00' />
            <p className={clsx(styles.textCta)}>Chọn gói thanh toán</p>
            <div className={clsx(styles.packageWrapper)}>
                {packages.map((packageItem, index) => (
                    <PackageItem key={index} packageInfo={packageItem} />
                ))}
            </div>
            <Support isLogin />
        </div>
    )
}

export default PriceList