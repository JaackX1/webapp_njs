/* Components */
import Navbar from '@/components/navbar/navbar.jsx';
import Footer from '@/components/footer/footer.jsx';
import Hero from '@/components/PageSection/home/hero.jsx';
import Info from '@/components/PageSection/home/info.jsx';
import Clients from '@/components/PageSection/home/clients.jsx';
/* Styles */
import style from '@/assets/css/prueba.module.css';
/* Img */
import imgWavy from '../assets/img/WavyIndex.jpg';
import imgfloat from '../assets/img/floatIndex.jpg';


export default function Home() {
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero/>
      {/* <section id={style.heroBanner}>
            <div className={style.container}>
                <div className={`${style.row} grid grid-cols-2`}>
                    <div className={style.textAlign}>
                        <h1>Expertos en <span>Seguridad</span></h1>
                        <h2>Te brindamos la mejor asesoria profesional para evitar riesgos en tu empresa, con el mejor
                            servicio personalizado</h2>
                        <div className={style.buttonWrapper}>
                            <a href="#" className={style.btnGetStarted}>Cotización</a>
                            <a href="#" className={style.btnWatchVideo}><i className='bx bx-play-circle'></i>Watch video</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={imgfloat.src} alt="" className={`${style.imgFluid} animate-upDown`}/>
                    </div>

                </div>
            </div>
        </section> */}

      <Info/>
      <Clients/>

      {/* <div className={style.section}>
        <div className={style.container2}>
          <div className={style.contentSection}>
            <div className={style.title}>
              <h1>Sobre nostros</h1>
            </div>
            <div className={style.content}>
              <h3>Expertos con más de 20 años en el rubro</h3>
              <p>Somos un grupo de más de 40 expertos en prevención de riesgos, presentes en todo el territorio
                nacional, brindando asesorías a pequeñas, medianas y grandes empresas de distintos rubros. Para
                las organizaciones que no cuentan con sus propios prevencionistas nos volvemos parte de ellos. Y
                en el caso en que ya cuentes con prevencionistas, somos tu apoyo y ejecutamos las actividades en
                distintos puntos de trabajo para que tengas el mayor alcance en tu organización.</p>
              <hr style={{ margin: "40px auto" }} color="ffffff" />
              <div className={style.button}>
                <a href="">Contactanos</a>
              </div>
            </div>
          </div>
          <div className={style.imageSection}>
            <img src={imgWavy.src} alt="" />
          </div>
        </div>
      </div> */}

      <Footer />
    </main>
  )
}
