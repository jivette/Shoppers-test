import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CurrencyInput from 'react-currency-input-field';

function Carousel(props) {
    const {slides} = props
    return (
      <CarouselProvider {...props}>
        <Slider>
          {slides.map((item, key) => {
              console.log(item.image)
              return (
                <Slide index={key}>
                    <div className={`columns is-align-items-center ${props.visibleSlides> 0 ? "is-flex-direction-column card m-2" : ""}`}>
                        <div className={`column ${props.visibleSlides> 0 ? "p-0" : ""}`}>
                            <img src={item.image.default} />
                        </div>
                        <div className={`column ${props.visibleSlides> 0 ? "p-6 has-text-centered" : "p-6"}`} >
                            <h1 className={`${props.visibleSlides> 0 ? "is-size-4 is-size-6-mobile is-secondary-color" : "is-size-2 is-size-4-mobile"}`} >{item.title}</h1>  
                            <p className={`${props.visibleSlides> 0 ? "is-size-6" : "is-size-6"}`}>{item.content}</p>  
                            { item.price ? 
                            <CurrencyInput
                                editable={false}
                                defaultValue={item.price}
                                decimalScale={2}
                                prefix={"$"}
                                className="has-text-centered is-size-6 is-secondary-color"
                                style={{border: 0}}
                            />
                            :null}
                        </div>
                    </div>
                </Slide>
              )
            })
          }
        </Slider>
        <div className={`is-flex ${props.buttonCentered ? "is-justify-content-center" : "is-justify-content-flex-end"}`}>    
            {props.dots ? 
                <DotGroup />
                :
                <>
                    <ButtonBack className="button-slider">back</ButtonBack>
                    <ButtonNext className="button-slider">next</ButtonNext>
                </>    
            }
        </div>    
      </CarouselProvider>
    );
};

export default Carousel