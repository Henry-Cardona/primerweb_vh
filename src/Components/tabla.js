
import './tabla.css';
import React from 'react';
import imagen1 from './Img/imag-2.png';
import imagen2 from './Img/imag-3.png';
import imagen3 from './Img/imag-4.png';

export default function Tabla(){
    return(
        <div className='Container-box'>
            <div className='info-box'>
                <img src={imagen1} alt=''></img>
                <h2>Lorem ipsum.</h2>
                <div className='texto-box'>
                    <p>
                        El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera 
                        para permitir la presentación de elementos gráficos en documentos, sin necesidad de una 
                        copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la 
                        forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso 
                        de producción más libertad.
                    </p>
                    <a href="https://www.youtube.com/watch?v=NPOBOk5_vwI">
                        Leer más
                    </a>
                </div>
            </div>
            <div className='info-box'>
                <img src={imagen2} alt=''></img>
                <h2>Lorem ipsum.</h2>
                <div className='texto-box'>
                    <p>
                        El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera 
                        para permitir la presentación de elementos gráficos en documentos, sin necesidad de una 
                        copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la 
                        forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso 
                        de producción más libertad.
                    </p>
                    <a href="https://www.youtube.com/watch?v=S4mCIsmiAWc">
                        Leer más
                    </a>
                </div>
            </div>
            <div className='info-box'>
                <img src={imagen3} alt=''></img>
                <h2>Lorem ipsum.</h2>
                <div className='texto-box'>
                    <p>
                        El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera 
                        para permitir la presentación de elementos gráficos en documentos, sin necesidad de una 
                        copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la 
                        forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso 
                        de producción más libertad.
                    </p>
                    <a href="https://www.youtube.com/watch?v=0VplLt39yrk">
                        Leer más
                    </a>
                </div>
            </div>
        </div>
    );
};