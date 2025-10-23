import { Header } from "../../Components/Header/header.jsx"
import { Footer } from "../../Components/Footer/footer.jsx"
import "./Setor_Grafico.css"
import ApexChart from "../../Components/Graficos/pizza/ApexChart.jsx"
import ApexChart2 from "../../Components/Graficos/Linha/ApexChart.jsx"
import imagem from "../../assets/img/excel.svg"
import imagem2 from "../../assets/img/meet.svg"
import imagem3 from "../../assets/img/drive.svg"
import CarouselV from "../../Components/CarouselV/carouselV.jsx"

export const Setor_Grafico = () => {
  return (
    <>
      <Header />
      <main className="main-grafico">

        <div className="titulo">
<<<<<<< HEAD
          <h1>Gráfico</h1>
          <hr />
        </div>

          {/* <div className="img_ferramentas"></div>
          <div className="img_ferramentas2"></div> */}
=======
          <h1>Grafico</h1>
          <hr />
        </div>

          <div className="img_ferramentas"></div>
          <div className="img_ferramentas2"></div>
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
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

