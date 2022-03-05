import React from "react";
import "./PopupAuto.css";
import {IAutoInterface} from "../../shared/auto.interface";

export function PopupAuto({isOpen, onClose, car}) {

    const [select, setSelect] = React.useState(false)


    function onSelect() {
        setSelect(!select);
    }

    return(
        <div className={`popup popup_type_preview ${isOpen && 'popup_opened'}`}>
            <div className="container">
                <span className="popup__close" onClick={onClose}/>

                <div className="popup__preview-container">
                    <div className="form__container">
                        <p className="form__title">Забронировать автомобиль</p>
                        <form className="form" type="form">
                            <div className="form__input form__input_double">
                                <input
                                    className="input first"
                                    type="text"
                                    placeholder="Toyota"
                                />
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Camry"
                                />
                            </div>
                            <div className="form__input form__input_double">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="2.0 AT Стандарт 2020"
                                />
                            </div>
                            <div className="form__input form__input_double">
                                <input
                                    className="input first"
                                    type="number"
                                    placeholder="Ваш телефон"
                                />
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Ваше имя"
                                />
                            </div>

                            <select className="input select" name="present">
                                <option value="">Выбрать подарок</option>
                                <option value="doroga">Компенсируем дорогу до автосалона</option>
                                <option value="kasko">Быстрое оформление КАСКО и ОСАГО за 15 минут</option>
                                <option value="skidka">Скидка 30 000 рублей</option>
                                <option value="oborudovanie">Устрановка любого доп. оборудования</option>
                                <option value="bonus">Немыслимый бонус по сервису - каждому покупателю ТО-0 и ТО-1 в подарок!</option>
                                <option value="bonus2"> Бонусная карта на сервисное обслуживание вашего автомобиля</option>

                            </select>

                        </form>


                    </div>
                    <div className="image__container">
                        <div className="popup__subtitle">
                            <p className="subtitle_new-price">1 615 000 ₽</p>
                            <s className="subtitle_old-price">1 800 000 ₽</s>
                        </div>
                        <img className="popup__img" src={car.src}  />
                        <div className="radio-container">
                            <span className="radio" style={{backgroundColor: "#0481C7"}} onClick={onSelect}>
                                <span className={`selected ${select && 'selected__true'}`}/>
                            </span>
                            <span className="radio" style={{backgroundColor: "#FF0000"}} >
                            </span>
                            <span className="radio" style={{backgroundColor: "#E8E8E8"}}>
                            </span>
                            <span className="radio" style={{backgroundColor: "#FFFFFF"}}>
                            </span>
                            <span className="radio" style={{backgroundColor: "#C4C4C4"}}>
                            </span>
                            <span className="radio" style={{backgroundColor: "#6A6A6A"}} >
                            </span>
                            <span className="radio" style={{backgroundColor: "#262626"}}>
                            </span>
                            <span className="radio" style={{backgroundColor: "#A02323"}} onClick={onSelect}>
                                <span className={`selected ${select && 'selected__true'}`}/>
                            </span>
                            <span className="radio" style={{backgroundColor: "#625A55"}}>
                            </span>
                        </div>
                    </div>

                </div>
                <p className="text">Нажимая кнопку “Забронировать авто” Вы даете согласие на обработку своих <u>персональных данных</u></p>
            </div>

        </div>
    )
}
