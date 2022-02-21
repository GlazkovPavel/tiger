import React from 'react';
import './Main.css';

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Editor} from "../Editor/Editor";


export function Main(props: { loggedIn: boolean}){

  const mainState = true


  return(
    <>
      <Header
      main={mainState}
      loggedIn={props.loggedIn}
      />

        <p>Тут будет приветствовать тигр</p>

        <Editor />

        <Footer />

    </>

  )
}
