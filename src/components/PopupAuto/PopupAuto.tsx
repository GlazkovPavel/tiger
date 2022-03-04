import React from "react";
import "./PopupAuto.css";
import {IAutoInterface} from "../../shared/auto.interface";

export function PopupAuto({isOpen, onClose}: any) {

    return(
        <div className={`popup popup_type_preview ${isOpen && 'popup_opened'}`}>
            <div className="popup__preview-container">
                <span className="popup__close popup__close_type_preview" onClick={onClose}></span>
                {/*<img className="popup__preview-img" src={card.link} alt={card.name} />*/}
                {/*<p className="popup__preview-subtitle">{card.name}</p>*/}
            </div>
        </div>
    )
}
