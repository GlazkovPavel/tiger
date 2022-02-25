import React from "react";
import "./AutoCard.css";
import {IAutoInterface} from "../../shared/auto.interface";

export function AutoCard(props: IAutoInterface) {

    return(
        <li className="auto__item" >
            <img className="auto__photo" alt={props.title} src={props.src}/>

            <div className="auto__item-description">
                <p className="auto__title">{props.title}</p>
                <button className='auto__button'>Посмотреть</button>
            </div>
        </li>
    )
}
