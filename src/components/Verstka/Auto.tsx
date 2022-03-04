import React from "react";
import {cars} from "../../shared/utils";
import {IAutoInterface} from "../../shared/auto.interface";
import {AutoCard} from "../AutoCard/AutoCard";
import './Auto.css';

export function Auto(){


    return(
        <section className="auto">

            <h2  className="auto__text">Наши подборки</h2>

            <ul className="auto__grid">
                {cars?.map((auto: IAutoInterface) => 
                    <AutoCard
                        title={auto.title}
                        src={auto.src}
                     id={auto.id}/>

                )}
            </ul>
            <button className="auto__button button">показать еще</button>
        </section>
    )
}
