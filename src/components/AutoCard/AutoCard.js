import React from "react";
import "./AutoCard.css";
import {IAutoInterface} from "../../shared/auto.interface";
import {PopupAuto} from "../PopupAuto/PopupAuto";

export function AutoCard(props) {
    const [openPopup, setOpenPopup] = React.useState(false);

    const onOpen = () => {
        setOpenPopup(true);
    }

    const closePopup = () => {
        setOpenPopup(false);
    }
    return(
       <>
           <li className="auto__item" >
            <img className="auto__photo" alt={props.title} src={props.src} onClick={onOpen}/>

            <div className="auto__item-description">
                <p className="auto__title">{props.title}</p>
                <button className='auto__button'>Посмотреть</button>
            </div>
        </li>

        <PopupAuto isOpen={openPopup} onClose={closePopup} car={props}/>
    </>
    )
}
