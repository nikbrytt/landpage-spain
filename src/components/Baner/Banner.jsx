import './baner.scss'

const Banner = () => {
    return (<section className="banner">
        <div className="banner__bg">
            <div className="banner__info">
                <h1>Villa Zafiro</h1>
                <h4>Epitome of modern luxury and innovation, born from an exclusive the Lamborghini
                    collaboration</h4>
                <div className="banner__prices">
                    <div className="banner__price">
                        <div>from<span>863 m2</span></div>
                        <div>property size</div>
                    </div>
                    <div className="banner__price">
                        <div>from <span>4,800,000 m2</span></div>
                        <div>property size</div>
                    </div>
                </div>
            </div>

            <div className="banner__full">
                <div className="banner__image">
                    <img src="/banner-photo.png" alt=""/>
                </div>
                <div className="banner__buttons">
                    <h4>Получите полную информацию о Villa Zafiro в Costa de Sol, Испания</h4>
                    <a href="" className="banner__presentation">Получить презентацию</a>
                    <a href="" className="banner__contact">Связаться</a>
                </div>
            </div>
        </div>
    </section>)
}

export default Banner