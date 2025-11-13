import React from 'react';
import imgCard from "../../assets/img/IconDiscord.svg";
import { Botao } from "../../Components/Botao/botao";
import Planilhas from "../Tools/Planilhas";
import GoogleDrivePicker from '../Tools/GoogleDrivePicker';
import Docs from '../Tools/Docs';
import Calendario from '../Tools/Agenda';
import Meet from '../Tools/Jitsi';

export const Card = (props) => {
    return (
        <div className="card_ferramentas">
            <img src={props.imagens} alt={props.Titulo} />
            <p>{props.Titulo}</p>

            {/* Exibe o componente Planilhas apenas se o título for "Planilhas" */}
            {props.Titulo === "Planilhas" && <Planilhas />}
            {props.Titulo === "Drive" && <GoogleDrivePicker />}
            {props.Titulo === "Documents" && <Docs />}
            {props.Titulo === "Agenda" && <Calendario />}
            {props.Titulo === "Meet" && <Meet />}
            {/* Caso queira reativar o botão */}
            {/* <Botao
        nomeBotao="Acessar"
        class_btn={props.classbtncard}
      /> */}
        </div>
    );
};