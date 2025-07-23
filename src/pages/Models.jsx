import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "../styles/model.scss";
import axios from "../axiosConfig/axiosConfig";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect } from "react";


const Models = () => {
  const [mount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])


  const [data, setData] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get("/products/getProducts");
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [])



  const detailRef = useRef();
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    if (selectedModel) {
      const timeout = setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [selectedModel]);

  const handleSeeMore = (model) => {
    setSelectedModel(model);
  };



  const size = 7
  const models = []


  const [display, setDisplay] = useState(1)
  const visible = data.slice(0, display * size)
  for (let i = 0; i < visible.length; i += size) {
    models.push(visible.slice(i, i + size))
  }

  const carRef = useRef()

  useLayoutEffect(() => {
    if (selectedModel && carRef.current) {
      // Wait until all car images are loaded
      const images = carRef.current.querySelectorAll("img");
      let loaded = 0;

      const onLoad = () => {
        loaded++;
        if (loaded === images.length) {
          const anim = gsap.to(carRef.current, {
            x: "-120%",
            duration: 2,
            ease: "none",
            scrollTrigger: {
              trigger: ".page2 .container .scroll-inner",
              scroller: ".Model", // Or remove if you're using default body scroll
              start: "top 0%",
              end: "top -100%",
              scrub: 2,
              pin: true,
              anticipatePin: 1,
            },
          });

          // cleanup
          return () => {
            anim.scrollTrigger?.kill();
            anim.kill();
          };
        }
      };

      images.forEach((img) => {
        if (img.complete) onLoad();
        else img.addEventListener("load", onLoad);
      });

      return () => {
        images.forEach((img) => img.removeEventListener("load", onLoad));
      };
    }
  }, [selectedModel]);






  return (

    <div className={`Model ${mount ? "fade" : ""} `}>
      <section className="page1" >
        <div className="container">
          <div className="header">
            <p>Only The Best Cars</p>
            <h1>Our Vehicles</h1>
            <h3>we provide our customers with the most incredible driving emotions. <br />Thats why we have only world class cars in our fleet</h3>
          </div>

          {models.map((chunk, index) => (
            <div className="models" key={index}>
              <div className="grid-1">
                {chunk.slice(0, 3).map((car, index) => (
                  <div className="box" key={index}>
                    <div className="image">
                      <img src={car.imgSRC} alt={car.name} />
                    </div>
                    <div className="info">
                      <button  onClick={() => handleSeeMore(car)}>{car.name}</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid-2">
                {chunk.slice(3, 7).map((car, index) => (
                  <div className="box" key={index}>
                    <div className="image">
                      <img src={car.imgSRC} alt={car.name} />
                    </div>
                    <div className="info">
                      <button onClick={() => handleSeeMore(car)}>{car.name}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {display * size < data.length && (
            <button className="Load" onClick={() => setDisplay(prev => prev + 1)}>Load</button>
          )}
        </div>



      </section>
      {selectedModel && (
        <section ref={detailRef} className="page2">
          <div className="container" >
            <div className="landing">
              <div className="image">
                <img src={selectedModel.landingPage} alt={selectedModel.name} />
              </div>
              <div className="info">
                <h1>Skoda - {selectedModel.name}</h1>
              </div>
            </div>

            <div className="car-info">
              <p>{selectedModel.info}</p>
            </div>

            <div className="car-image">
              <div className="scroll-inner" ref={carRef}>
                {selectedModel.image.map((img, i) => (
                  <div className="panel" key={i}>
                    <img src={img} alt={`img-${i}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="page3" ></section>
    </div>
  )
}

export default Models
