
import React from 'react';
import './App.css';
import Colabore from '../pages/Colabore';
import Footer from '../components/Footer';
import './Colabore.css'


// div colabore
function Colabore() {
    return (
        <div className="container">
            <div className="title">
                <h1>Colabore</h1>
            </div>
            <div className="description">
                <p>
                    Bem-vindo à Fábrica de Ideias, onde a magia do brincar encontra a educação! 
                    Aqui, acreditamos que cada criança merece um mundo de criatividade e aprendizado. 
                    Nossa missão é criar brinquedos lúdicos e educativos, como fantoches de pano, 
                    que estimulam a imaginação, desenvolvem habilidades sociais e promovem o aprendizado 
                    de maneira divertida.
                </p>
            </div>
            <Ajuda />
            <AjudarMais />
        </div>
    );
}

function Ajuda() {
    return (
        <div className="container">
            <div className="title">
                <h1>Como você pode ajudar?</h1>
            </div>
            <div className="description">
                <h2>1</h2> 
                <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
                <h2>3</h2> 
                <p>Participe de Nossas Oficinas: Oferecemos workshops onde você pode aprender a criar seus próprios brinquedos lúdicos. Venha se divertir e fazer parte dessa experiência!</p>
            </div>
        </div>
    );
}

function AjudarMais() {
    return (
        <div className="container">
            <div className="title">
                <h1>Como você pode ajudar?</h1>
            </div>
            <div className="description">
                <h2>2</h2> 
                <p>Divulgue Nosso Trabalho: Ajude-nos a espalhar a palavra! Compartilhe nossa missão nas redes sociais e convide amigos e familiares a conhecer a Fábrica de Ideias.</p>
                <h2>4</h2> 
                <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
            </div>
        </div>
    );
}

<hr>

<p> Na Fábrica de Ideias, cada colaboração conta. Juntos, podemos criar um futuro mais criativo e educativo para as crianças. Vamos fazer da brincadeira uma ferramenta poderosa de aprendizado!

Entre em contato conosco e descubra como você pode fazer parte dessa jornada incrível! </p> </hr>


const Banner = () => {
  return (
    <div className="banner">
      <img src="../assets/recycle.png" alt="Ícone de reciclagem" className="icon" />
      <span>Faça parte da solução, recicle!</span>
    </div>
  );
};

export default Banner;


export default Colabore;


import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <section className='footerSection'>
                <div className='info'>
                    <h2 id='title'>Brinquedos educativos artesanais e sustentáveis</h2>
                    <button className='callUsButton'>Fale conosco</button>
                    <p id='subtitle'>Respondemos em até X tempo</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;


