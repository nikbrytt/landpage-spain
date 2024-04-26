import "./footer.scss"

const index = () => {
    return (<footer className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__content-upper">
                    <a href="/">
                        <img src="/logo.svg" alt="Index logo" width='168.8px' height='65px'
                             className="footer__content-logo"/>
                    </a>
                    <div className="footer__content-contacts">
                        <a href="https://api.whatsapp.com/send/?phone=971521038793&text&type=phone_number&app_absent=0"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M18.1942 16.2393C17.917 17.0238 16.8153 17.6728 15.9367 17.8626C15.3353 17.9903 14.5509 18.0913 11.9082 16.9962C8.94009 15.7665 4.8185 11.3861 4.8185 8.47114C4.8185 6.98719 5.6741 5.25923 7.17025 5.25923C7.89015 5.25923 8.04885 5.27327 8.28575 5.84153C8.5629 6.51104 9.2391 8.16054 9.3196 8.32964C9.65195 9.0233 8.98149 9.42937 8.49504 10.0333C8.33979 10.215 8.16385 10.4116 8.36051 10.7498C8.556 11.0811 9.2322 12.1832 10.2258 13.0678C11.5092 14.2112 12.5499 14.5763 12.9225 14.7316C13.1997 14.8466 13.5309 14.8198 13.7333 14.6035C13.9898 14.3263 14.3083 13.8663 14.6326 13.4131C14.8614 13.0887 15.1524 13.0482 15.4572 13.1632C15.663 13.2346 18.2792 14.4496 18.3896 14.644C18.4713 14.7855 18.4713 15.4547 18.1942 16.2393ZM11.5023 0H11.4965C5.15659 0 0 5.15815 0 11.5C0 14.0147 0.810758 16.3476 2.18961 18.24L0.756705 22.5132L5.17616 21.1009C6.99431 22.3042 9.16435 23 11.5023 23C17.8422 23 23 17.8418 23 11.5C23 5.15815 17.8422 0 11.5023 0Z"
                                      fill="white"/>
                            </svg>
                        </a>
                        <a href="https://t.me/pro_partUAE" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"
                                 fill="none">
                                <path
                                    d="M11.5 0C9.22559 0 7.00211 0.67446 5.11094 1.93809C3.21978 3.20173 1.7458 4.99778 0.875394 7.09913C0.00498745 9.20042 -0.222756 11.5128 0.220971 13.7435C0.664699 15.9743 1.75997 18.0234 3.36828 19.6318C4.97658 21.24 7.02568 22.3353 9.25649 22.779C11.4872 23.2228 13.7996 22.9949 15.9009 22.1245C18.0022 21.2541 19.7983 19.7803 21.062 17.8891C22.3255 15.9979 23 13.7745 23 11.5C23 8.45001 21.7883 5.52494 19.6318 3.36828C17.4751 1.2116 14.5499 0 11.5 0ZM17.1494 7.87749L15.2662 16.7756C15.1225 17.4081 14.7488 17.5519 14.2169 17.2644L11.3419 15.1369L9.90438 16.4737C9.83667 16.5621 9.7497 16.634 9.65008 16.6839C9.55046 16.7336 9.44078 16.7601 9.32937 16.7612L9.53063 13.8862L14.8494 9.07062C15.0938 8.86937 14.8494 8.75437 14.5044 8.95562L7.97813 13.0525L5.10312 12.1612C4.485 11.9744 4.47062 11.5431 5.2325 11.2556L16.3156 6.94312C16.8619 6.78499 17.3219 7.10124 17.1494 7.87749Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer__content-center">
                    <p className="footer__content-descr">Вся представленная информация на сайте не является публичной офертой</p>
                    <ul className="footer__content-list">
                        <li className="footer__content-item"><a href="/">Купить</a></li>
                        <li className="footer__content-item"><a href="/">Цены</a></li>
                        <li className="footer__content-item"><a href="/">Застройщики</a></li>
                        <li className="footer__content-item"><a href="/">О нас</a></li>
                    </ul>
                </div>
                <div className="footer__content-bottom">
                    <p className="footer__content-descrBottom">Отправляя сообщение в мессенджеры, я подтверждаю, что даю Согласие на обработку моих персональных данных.</p>
                    <button className="footer__content-btn">Заказать звонок</button>
                </div>
            </div>
        </div>
    </footer>)
}

export default index