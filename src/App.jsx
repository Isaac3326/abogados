
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (

    <div>
      <nav className='nav__items'>
        <ul className='nav__ul'>
          <li className='nav__home'><a href="#">INICIO</a></li>
          <li className='nav__aboutme'><a href="#">QUIENES SOMOS</a></li>
          <li className='nav__projects'><a href="#container__habilidades">SERVICIOS</a></li>
          <li className='nav__contact'><a href="#container__formulario">CONTACTA CON NOSOTROS</a></li>
          

        </ul>
        <ul className='nav_ul nav__dos'>
        <button className='nav__btn'><a href="#container__formulario">1ª CITA GRATUITA</a></button>
        </ul>
        
      </nav>
      
      <section id='section__aboutme'>
        <div id="container">
          <h2 id='tittle__aboutme'>ACERCA DE NOSOTROS</h2>
        </div>
        <div className='aboutme__item'>
          
          <div className='aboutme__titulo'>
            <h2>Somos especialistas en derecho Civil y de Familia</h2>
          </div>
          <p> 
            Nuestra amplia trayectoria que nos caracteriza resolviendo causas en asuntos civiles, de familia, laboral, 
            nos desmarcamos del resto, por la eficacia, la atención y responsabilidad que asumimos desde que contratan nuestros servicios.
            Nuestro compromiso es con la justicia y la defensa efectiva, entendemos la complejidad y las consecuencias que conlleva cada caso,
            por eso ofrecemos estrategias diseñadas para abordar cada aspecto del proceso judicial.  
          </p>
        </div>
        



        <div id="container__habilidades">
          <h2 id='tittle__abilities'>SERVICIOS</h2>
        </div>
        <div className='container__servicios'>
          <div>
            <h5>Derecho Civil</h5>
          Asesorar al cliente en disputas de propiedades, tanto inmuebles como muebles, en contratos, daños
          y prejuicios. Preparar y presentar documentos legales, como demandas, y otros asuntos
          relacionados con el derecho civil.
          </div>
          <div>
            <h5>Derecho de Familia</h5>
          Representar al cliente en casos, como la custodia del menor, la pensión alimenticia, patria potestad, 
          divorcios o separaciones entre los conyuges,asesorarle sobre las obligaciones y derechos 
          que posee en materia de derecho de familia. 
          </div>
          
          <div>
            <h5>Derecho Societario</h5>
          Asesoramiento para la creación y estructura de una compañia, incluyendo la eleccion del tipo de compañia, redacción
          de estatutos y la posterior inscripción en el registro mercantil. Elaboración de todo tipo de contratos referente a empresas.
          </div>
          
          <div>
            <h5>Derecho Ambiental</h5>
          Representar a clientes en conflictos relacionados con la contaminación del agua o el aire,
          además la protección de los ecosistemas y la biodiversidad.
          Asesoramiento sobre la Ley de Aguas, la Ley de Gestión Ambiental.
          </div>
          <div>
            <h5> Derecho de Tránsito</h5>
            Asesorar al cliente acerca de la legislación que regula el tránsito terreste en el 
            Ecuador, representar al cliente en procedimientos judiciales relacionados con infracciones de 
            tránsito, accidentes de tránsito.
          </div>
          <div>
            <h5>Derecho Administrativo</h5>
            Asesoramiento sobre la negociación, resolución de conflictos administrativos, incluyendo la 
            mediación y arbitraje.Debida representación a clientes en conflictos relacionados con la 
            administración pública.
          
          </div>
          
        </div>
        

        
        
      </section>
      <div id="container__formulario">
          <h2 id='tittle__abilities'>FORMULARIO DE CONTACTO</h2>
      </div>
      <div className='container__form'>
      <div className='container__texto'>
        <h5>Contamos con 8 años de Experiencia</h5>
       <p>
       Nuestra tasa de éxito es una de las más altas de Ecuador, nos caracterizamos por prestar un asesoramiento de calidad, transparente y honesto, en continua comunicación con nuestros clientes.
       </p>
       <p>
       A empresas y particulares, a los que hemos representado y defendido ante los tribunales de la republica de el Ecuador, nos diferenciamos de otras firmas por la eficacia y la atención personalizada. 
       </p>
       <img src="/abogadostyle1.png" alt="" />
      </div>
      <div className='container__formi'>
      <h5>Cuéntanos tu caso</h5>
      <form action="https://formsubmit.co/madensantiago169@gmail.com" method="POST" className='item__form'>
        
        <input className='form__writer name1' name="name" placeholder="Nombre*" type="text"></input>
        <input className='form__writer name1' name="apellido" placeholder="Apellido" type="text"></input>
        <input className='form__writer name1' name="email" placeholder="Email*" type="text"></input>
        <input className='form__writer name1' name="name" placeholder="Telefono*" type="number"></input>
        <textarea name="otros" id="textarea" placeholder='Comentario'></textarea>
        <button className='form__btn'> Enviar</button>
      </form>
      </div>
      </div>
    

     
      
      <footer className='item__footer'>

        <div>
          <div className='redes__item'> <b>Redes Sociales</b></div>
          <div className='redes'>
            <a href='https://www.facebook.com/profile.php?id=100035141495891&mibextid=ZbWKwL'>
              <img src="/facebook.png" alt="error" />
            </a>
            <a href="https://wa.link/7o05af">
              <img src="/whatsapp.svg" alt="error" />
            </a>
            
            
          </div>

        </div>

      </footer>


    </div>

  )
}

export default App
