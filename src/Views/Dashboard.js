import React from 'react'
import CardContent from '../Components/CardContent'
import Carousel from '../Components/Carousel'
import Menu from '../Components/Menu'
import TopBar from '../Components/TopBar'
import Children from "../images/children.jpg";
import Men from "../images/men.jpg";
import Women from "../images/women.jpg";

const Slides = [
    {
        title: "Finding your perfect shoes",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: require("../images/hero_1.png")
    },
    {
        title: "Finding your perfect shoes 2",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: require("../images/hero_1.png")
    }
]
const Products = [
    {
        title: "Tank Top",
        content: "Finding perfect products",
        price: 50,
        image: require("../images/cloth_1.jpg")
    },
    {
        title: "Corater",
        content: "Finding perfect products",
        price: 50,
        image: require("../images/cloth_2.jpg")
    },
    {
        title: "Polo Shirt",
        content: "Finding perfect products",
        price: 50,
        image: require("../images/cloth_3.jpg")
    },
    {
        title: "Tank Top",
        content: "Finding perfect products",
        price: 50,
        image: require("../images/cloth_1.jpg")
    },
    {
        title: "Corater",
        content: "Finding perfect products",
        price: 50,
        image: require("../images/cloth_2.jpg")
    },
    {
        title: "Polo Shirt",
        content: "Finding perfect products",
        price: 50,
        image: require("../images/cloth_3.jpg")
    }
]

const itemsContent = [
    {
        title: "FREE SHIPPING",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        title: "FREE RETURNS",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        title: "CUSTOMER SUPPORT",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    }
]


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
                    dots
                />
            </div>
            <div className="columns p-6">
                {itemsContent.map((item, key)=>{
                    return <CardContent item={item} key={key} />
                })}
            </div>

            <div className="columns">
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

            <div>
                <h1 className="has-text-centered is-size-3">Featured Products</h1>
                <Carousel slides={Products}
                    visibleSlides={3}
                    step={3}
                    naturalSlideWidth={400}
                    naturalSlideHeight={500}
                    totalSlides={6}
                    buttonCentered
                />
                
            </div>
        </div>
    )
}

export default Dashboard
