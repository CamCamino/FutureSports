import { useEffect } from "react";
import "./MediaSection.css";
import { Carousel } from 'rs-3d-react-carousal';


const MediaSection = () => {
    let slides = [
        <img src="/images/bike_riding.jpg" alt="A Man Riding A Bycicle." />,
        <img src="/images/boxing.jpg" alt="Two Men In A Boxing Ring. Fighting." />,
        <img src="/images/car_rally.jpg" alt="A Car Doing A Rally Race, Kicking Up Dirt. " />,
        <img src="/images/car_road.jpg" alt="Cars Racing On Racetrack." />,
        <img src="/images/olympics.jpg" alt="A Huge Stadium With Celebrations Going Wild." />,
    ];

    const callback = function(index){
        console.log("callback", index);
    }

    useEffect(() => {
        const buttons = document.querySelectorAll('.carousel-container button');
        buttons.forEach(button => {
            button.style.backgroundColor = '#456037';
            button.style.border = 'none';
        });
    }, []);

    return (
        <section className="media-box">
          <div className="carousel-container">
            <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback} />
          </div>
        </section>
    );
}

export default MediaSection;


