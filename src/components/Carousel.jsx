import { useState } from 'react'
import './Carousel.css'
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
function Carousel({data}){
    const [slide, setSelide] = useState(0)
    const values = data.sliders

    const nextSlide = () =>{
        setSelide(slide === values.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () =>{
        setSelide(slide === 0 ? values.length -1 :slide - 1)
    }
    return(
        <div className='carousel'>
            <BsArrowBarLeft className="arrow arrow-left" onClick={prevSlide}/>
            {
                values.map((item, index) =>{
                    return(
                        <img src={item.src} alt={item.alt} key={index} className={slide === index ? 'slider': 'slider slider-hidden'}/>
                    )
                })
            }
            <BsArrowBarRight className="arrow arrow-right" onClick={nextSlide}/>
            <span className='indicators'>
                {
                    values.map((_, idx) => {
                        return(
                            <button key={idx} onClick={() => setSelide(idx)} className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}></button>
                        )
                    })
                }
            </span>
        </div>
    )
}
export default Carousel;