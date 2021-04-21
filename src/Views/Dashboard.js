import React from 'react'
import CardContent from '../Components/CardContent'
import Carousel from '../Components/Carousel'
import Menu from '../Components/Menu'
import TopBar from '../Components/TopBar'
import Children from "../images/children.jpg";
import Men from "../images/men.jpg";
import Women from "../images/women.jpg";
import Blog from "../images/blog_1.jpg";
import { itemsContent, Products, Slides } from '../Mocks'

function Dashboard() {

    return (
        <div className="container">
            <TopBar />
            <Menu />
            <div className="slider-container p-6">
                <Carousel slides={Slides}
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={Slides.length}
                    dots={true}
                />
            </div>
            <div className="columns p-6">
                {itemsContent.map((item, key)=>{
                    return <CardContent item={item} key={key} />
                })}
            </div>

                <div className="columns mt-6 mb-6">
                    <div className="column">
                        <img src={Women}/>
                    </div>
                    <div className="column">
                        <img src={Children}/>
                    </div>
                    <div className="column">
                        <img src={Men}/>
                    </div>
                </div>

            <div className="mt-6 mb-6 pt-6 ">
                <h1 className="has-text-centered is-size-3">Featured Products</h1>
                <Carousel slides={Products}
                    visibleSlides={3}
                    step={3}
                    naturalSlideWidth={400}
                    naturalSlideHeight={500}
                    totalSlides={6}
                    buttonCentered={true}
                />
                
            </div>

            <section class="hero mt-6 mb-6">
            <h1 className="has-text-centered is-size-3">Big Sale!</h1>
                <div class="hero-body">
                <div className="columns is-align-items-center">
                    <div className="column is-three-fifths">
                        <img src={Blog}/>
                    </div>
                    <div className="column has-text-centered">
                        <p className="title is-secondary-color has-text-centered">
                        50% less in all items
                        </p>
                        <p className="subtitle has-text-centered has-text-weight-light has-text-grey">
                            By <span class="is-secondary-color is-font-weight-bold">Juan Carlos</span> - September 2020    
                        </p>
                        <p className="subtitle has-text-centered has-text-weight-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                       
                        </p>
                        <button class="button has-text-white is-medium mt-5 is-secondary-color-bg">Shop Now</button>
                    </div>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Dashboard
