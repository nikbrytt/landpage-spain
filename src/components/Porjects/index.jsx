import response from "../../data/response.json";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import './projects.scss'

const index = () => {
    return (<section className="projectLanPage">
        <div className="container">
            <div className="projectLanPage__info">
                <div className="projectLanPage__info-texts">
                    <h3 className="projectLanPage__info-title">Новые проекты на Costa de Sol</h3>
                    <p className="projectLanPage__info-descr">Подборка объектов на Коста-дель-Соль представляет собой
                        разнообразную и внушительную коллекцию недвижимости, идеально подходящую для жизни, отдыха или
                        инвестиций, сочетающую в себе роскошь, комфорт и доступность. Этот регион Испании известен
                        своими живописными пейзажами, мягким климатом и развитой инфраструктурой, что делает его
                        привлекательным выбором для покупателей со всего мира.</p>
                </div>
                <button className="projectLanPage__info-btn">Посмотреть все проекты</button>
            </div>
            <div className="projectLanPage__projects">
                <ul className="projectLanPage__projects-list" id="projectsList">
                    {response.slice(0, 6).map((item, index) => (
                        <li key={index} className="projectLanPage__projects-item"
                            style={{backgroundImage: `url(${item.pictures[0]})`}}>
                            <div className="projectLanPage__projects-info">
                                <div>
                                    <a href={`https://propart.ae/project/${item._id}`} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3 0H5C5.55228 0 6 0.447715 6 1C6 1.51284 5.61396 1.93551 5.11662 1.99327L5 2H3C2.48716 2 2.06449 2.38604 2.00673 2.88338L2 3V17C2 17.5128 2.38604 17.9355 2.88338 17.9933L3 18H17C17.5128 18 17.9355 17.614 17.9933 17.1166L18 17V15C18 14.4477 18.4477 14 19 14C19.5128 14 19.9355 14.386 19.9933 14.8834L20 15V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H3C1.40232 20 0.0963391 18.7511 0.00509262 17.1763L0 17V3C0 1.40232 1.24892 0.0963391 2.82373 0.00509262L3 0ZM19 0L19.081 0.00300002L19.2007 0.0202401L19.3121 0.0497382L19.4232 0.0936735L19.5207 0.145995L19.6168 0.212786L19.7071 0.292893L19.8037 0.404693L19.8753 0.515938L19.9063 0.576901L19.9401 0.65835L19.9642 0.734007L19.9931 0.881905L20 1V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V3.414L11.7071 9.70711C11.3466 10.0676 10.7794 10.0953 10.3871 9.7903L10.2929 9.70711C9.93241 9.34662 9.90468 8.77939 10.2097 8.3871L10.2929 8.29289L16.584 2H13C12.4477 2 12 1.55228 12 1C12 0.447715 12.4477 0 13 0H19Z"
                                                  fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="projectLanPage__projects-texts">
                                    <h4 className="projectLanPage__projects-title">${item.name}</h4>
                                    <span
                                        className="projectLanPage__projects-subtitle">by ${item.area}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={'20'}
                    className="mySwiper"
                >
                    {response.slice(0, 6).map((item, index) => (
                        <SwiperSlide key={index} className="projectLanPage__projects-item"
                                     style={{backgroundImage: `url(${item.pictures[0]})`}}>
                            <div className="projectLanPage__projects-info">
                                <div>
                                    <a href={`https://pro-part.es/project/${item._id}`} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3 0H5C5.55228 0 6 0.447715 6 1C6 1.51284 5.61396 1.93551 5.11662 1.99327L5 2H3C2.48716 2 2.06449 2.38604 2.00673 2.88338L2 3V17C2 17.5128 2.38604 17.9355 2.88338 17.9933L3 18H17C17.5128 18 17.9355 17.614 17.9933 17.1166L18 17V15C18 14.4477 18.4477 14 19 14C19.5128 14 19.9355 14.386 19.9933 14.8834L20 15V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H3C1.40232 20 0.0963391 18.7511 0.00509262 17.1763L0 17V3C0 1.40232 1.24892 0.0963391 2.82373 0.00509262L3 0ZM19 0L19.081 0.00300002L19.2007 0.0202401L19.3121 0.0497382L19.4232 0.0936735L19.5207 0.145995L19.6168 0.212786L19.7071 0.292893L19.8037 0.404693L19.8753 0.515938L19.9063 0.576901L19.9401 0.65835L19.9642 0.734007L19.9931 0.881905L20 1V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V3.414L11.7071 9.70711C11.3466 10.0676 10.7794 10.0953 10.3871 9.7903L10.2929 9.70711C9.93241 9.34662 9.90468 8.77939 10.2097 8.3871L10.2929 8.29289L16.584 2H13C12.4477 2 12 1.55228 12 1C12 0.447715 12.4477 0 13 0H19Z"
                                                  fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="projectLanPage__projects-texts">
                                    <h4 className="projectLanPage__projects-title">{item?.name?.substring(item?.name.indexOf("Development") + "Development".length, item.name.indexOf(",")).trim()}</h4>
                                    <span
                                        className="projectLanPage__projects-subtitle">in {item.area}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>)
}

export default index