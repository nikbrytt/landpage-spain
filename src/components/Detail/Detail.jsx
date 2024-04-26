import React from "react";

const Detail = () => {
    return (<section className="detaileLanPage">
        <div className="container">
            <div className="detaileLanPage__content">
                <ul className="detaileLanPage__content-list">
                    <li className="detaileLanPage__content-item">
                        <div className="detaileLanPage__content-info">
                            <img src="/banner-photo.png" id='up-image' alt="Image magazine" width="751.89px"
                                 height="563px" className="detaileLanPage__content-img"/>
                            <h3 className="detaileLanPage__content-title">Найдите уникальные проекты для себя</h3>
                            <p className="detaileLanPage__content-descr">Здесь каждый объект недвижимости был выбран за
                                его уникальное сочетание элегантности, комфорта и изысканности, предлагающее
                                непревзойденные впечатления от жизни. Погрузитесь в воплощение роскоши с захватывающими
                                видами, самыми современными удобствами и сделанными на заказ интерьерами, созданными для
                                тех, кто ценит в жизни лучшее.</p>
                            <span
                                className="detaileLanPage__content-selection">Exclusive selection from Pro Part</span>
                            <button className="detaileLanPage__content-btn">Получить подборку</button>
                        </div>
                    </li>
                    <li className="detaileLanPage__content-item">
                        <img src="/banner-photo.png" alt="Image magazine" id="mag-1" width="751.89px"
                             height="563px" className="detaileLanPage__content-img"/>
                    </li>
                </ul>
            </div>
        </div>
    </section>)
}


export default Detail