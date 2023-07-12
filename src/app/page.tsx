import Image from 'next/image'
import Navbar from '@/components/navbar/navbar.jsx';
import Footer from '@/components/footer/footer.jsx';


export default function Home() {
  const imageRef = 'https://res.cloudinary.com/drd52d73n/image/upload/v1685374774/cld-sample-5.jpg';
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className='pt-16 flex w-full justify-center items-center min-h-screen'>
        <div className='max-w-[1250px] w-full px-4 flex gap-8 md:gap-4 flex-wrap md:flex-nowrap'>
          <div className='max-w-[700px] w-full '>
            <h1>Expertos en <span>Seguridad</span></h1>
            <p>Te brindamos la mejor asesoria profesional para evitar riesgos en tu empresa, con el mejor servicio personalizado</p>
          </div>
          <div className='w-full max-w-[500px] object-cover flex justify-center items-center'>
            <Image src={imageRef} alt='' width={1920} height={1080} />
          </div>

        </div>
      </section>
      <Footer/>
    </main>
  )
}
