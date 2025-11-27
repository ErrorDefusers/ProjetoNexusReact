import Planilhas from "../Tools/Planilhas";
import GoogleDrivePicker from '../Tools/GoogleDrivePicker';
import Docs from '../Tools/Docs';
import Calendario from '../Tools/Agenda';
import Meet from '../Tools/Jitsi';
import Youtube from "../Tools/Youtube";

export const Card = (props) => {
    return (
        <div className="card_ferramentas">
            <img src={props.imagens} alt={props.Titulo} />
            <p>{props.Titulo}</p>

            {/* Exibe o componente Planilhas apenas se o título for "Planilhas" */}
            {props.Titulo === "Grist" && <Planilhas />}
            {props.Titulo === "Drive" && <GoogleDrivePicker />}
            {props.Titulo === "Documents" && <Docs />}
            {props.Titulo === "Agenda" && <Calendario />}
            {props.Titulo === "Jitsi" && <Meet />}
            {props.Titulo === "Youtube" && <Youtube />}
            {/* Caso queira reativar o botão */}
            {/* <Botao
        nomeBotao="Acessar"
        class_btn={props.classbtncard}
      /> */}
        </div>
    );
};