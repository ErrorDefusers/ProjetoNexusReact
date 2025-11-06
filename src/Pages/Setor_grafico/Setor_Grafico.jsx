import  Header  from "../../Components/Header/header.jsx"
import Footer from "../../Components/Footer/footer.jsx"
import "./Setor_Grafico.css"
import ApexChart from "../../Components/Graficos/Pizza/ApexChart.jsx"
import ApexChart2 from "../../Components/Graficos/Linha/ApexChart.jsx"
import imagem from "../../assets/img/excel.svg"
import imagem2 from "../../assets/img/meet.svg"
import imagem3 from "../../assets/img/drive.svg"
import CarouselV from "../../Components/CarouselV/carouselV.jsx"

export default function Setor_Grafico  ()  {
  return (
    <>
      <Header />
      <main className="main-grafico">

        <div className="titulo">
          <h1>Gráficos</h1>
          {/* <hr /> */}
          <hr />
        </div>

          <div className="img_ferramentas"></div>
          <div className="img_ferramentas2"></div>
        <div className="section_grafico">
          <div className="grafico_1">
            <ApexChart />
          </div>
          <div className="grafico_2">
            <ApexChart2 />
          </div>
            <div className="carrossel">
              <CarouselV/>
            </div>


        </div>

      </main>
      <Footer/>
    </>
  )
}



