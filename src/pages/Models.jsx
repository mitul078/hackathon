import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "../styles/model.scss";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


const Models = () => {

  const data = [
    {
      imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/31462af8-f089-4e16-b317-8284e548402a/33c2024713deddf479c905c50fc7462c/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp",
      name: "New Elroq",
      landingPage: "https://cdn.skoda-auto.com/images/sites/encom-v2/6bbab6cc-5c1a-4959-96e6-24f61e6f62e1/ae0cdd3de4d3e69314de0fb3ca4890fa/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",

      image: ["https://cdn.skoda-auto.com/images/sites/encom-v2/6bbab6cc-5c1a-4959-96e6-24f61e6f62e1/ae0cdd3de4d3e69314de0fb3ca4890fa/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/5025f1b7-e03e-4286-9e2c-2ca0d3a35363/25ae155e261b9f31c0487ba02ce32920/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/5edbd71b-48b0-41a1-8ecb-06c299f188be/04e9e3aa0cfe6aec416c05ecf251d32a/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/cdb07802-c9ed-4266-8d46-d7f2af4822ca/f821f55536fd31921ff1be6016c34bc0/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/4cdc45ed-d645-4d7b-b0aa-b8c26fe3a720/f96a65e8e8083b08ee4ac3ff6951d95c/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/51d8d273-a2d3-4a18-bc6e-f5d92308c1f7/e3ef0121742b265307557e3291044aaa/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/aeee8a92-65ae-4245-981e-f2bc1f1daac8/c776aa8bb699899c4a12baab5d28258e/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/d54673fc-2fcb-4974-830b-97d5c9b89a75/c41a8c20744429fbe3e4a1cfa9c9076e/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp",
        "https://cdn.skoda-auto.com/images/sites/encom-v2/1599a65d-8a08-45fd-a520-cbfeaad10aeb/7eaaf3358e9ec0f92938f14a85fdcaa7/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp"
      ],

      info: "Ignite your curiosity with the newest electric addition to the Škoda SUV family. Styled in the sleek Modern Solid design language, it proudly displays the Škoda lettering in Dark Chrome across the bonnet. Gaze into its electrifying LED Matrix beam headlights, now slimmer in their supper section and seamlessly extending into the wings. Experience the thrill of its flatter, wider Tech-Deck Face – innovative yet familiar.",

    },

    { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/4db96715-f601-41f9-b56e-1c233467d022/780c0103ac6a552b4bc1ebeff0197698/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "New Enyaq Coupe", info: "Redefine elegance with the new Enyaq Coupé, a perfect blend of sophistication and innovation in the Modern Solid design language. Its sloping roofline and sculpted rear create a dynamic silhouette that commands attention, while the innovative Tech-Deck Face, LED Matrix headlights, cutting-edge aerodynamics, and impressive range ensure every journey is made with confidence and style.", image: ["https://cdn.skoda-auto.com/images/sites/encom-v2/99a7e054-feb0-4e81-83ca-2ee9d0204f4a/eafaa9af80d770766433ce0cc5f1110a/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/eee6f9f2-6a9f-4dc3-9325-3e3913cbe6bf/c935823a6e9378040cada19a94ec7906/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/cf9fd725-5c09-49b9-ab7d-9720d547bf0c/63994d646130ee47985db94a84eb57a0/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/f7994452-cead-4b38-b7ae-8703968200c5/7203c386b3a9df50c222adfa9e65636c/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/15bba401-2107-49b6-a13a-44351b81a928/31293d84f80a8e14b213fc019460c7ac/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/f3f67375-5f2f-4c4c-a463-eeb0e5effb2d/870fd418519881f0badbd697fa80f4ef/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/2299f775-84db-4362-99a0-3269e2c31f50/88354c2db7d6e97b31bf715624c19657/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp", "https://cdn.skoda-auto.com/images/sites/encom-v2/b1ea161f-cb81-4cfe-b0ea-3f8671cdfa6b/6ba65caee721d8e1099590984df08500/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp"] , landingPage: "https://api-vz2-ad.skoda-auto.com/visualizer-images/5A/5AC/exterior/desktop/day/64742/M3M3/65Z/img.0000.jpg" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/91c79962-6d6f-4edf-9ba8-850d5291f230/5637a7c0b8a8c2aabef3774c51526c33/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "New Enyaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/4e292bc0-1e0f-4a68-9f16-17b2147e7a04/42eb9542c64f0a6f0f88cf212239e05b/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Fabia" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/e17cfbd0-34a8-4e8a-961c-ff37ff103a6d/74aac25045ed917334bbcb51bc2ba3c7/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Scala" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/e17cfbd0-34a8-4e8a-961c-ff37ff103a6d/74aac25045ed917334bbcb51bc2ba3c7/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Octavia" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/e17cfbd0-34a8-4e8a-961c-ff37ff103a6d/74aac25045ed917334bbcb51bc2ba3c7/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Octavia Combi" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/419905ac-0ff4-4b43-a9f0-9072aa22f8bc/e9e9e832d2e57d19d6259dff1902ab56/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Superb" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/90d92954-d76b-426b-a632-78d090bb610d/608ddd81b53b35ce7708f733a986785a/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Superb Combi" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/3f9a48f9-7eaf-4c54-827a-75df09c8a7af/b1435165a0eb6b27913e74063be6a7d8/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kamiq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/fc6e03dd-e413-4f84-b523-ef8286919edf/2a5a108670a5fbc0445d2edf5b434dcf/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Karoq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/6f0160c7-bbe3-41f6-80eb-0fc50b2ff459/29ddbb642e9690b4b56c717fa807bce2/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kodiaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/35d30500-419f-4fb9-8492-fd2a7db5c898/7e978914e5d02d3b1a4d27e4d5a663d8/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kylaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/ce160174-cd93-4226-89bc-2e043675aab6/e78a94b06520b92a6f0b39dfb9c0fcd2/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kushaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/3021d3f7-b935-4dce-8eda-d4e3f3ddc567/82a11a7598b5322046e202a36b789775/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Slavia" },

  ]

  const [mount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])
  const detailRef = useRef(null);
  const scrollToDetails = () => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [selectedModel, setSelectedModel] = useState("");
  const handleSeeMore = (model) => {
    setSelectedModel(model);
    scrollToDetails();
  };

  const size = 7

  const [display, setDisplay] = useState(1)
  const visible = data.slice(0, display * size)

  const models = []
  for (let i = 0; i < visible.length; i += size) {
    models.push(visible.slice(i, i + size))
  }

  const carRef = useRef()

  useEffect(() => {
    if (selectedModel && carRef.current) {
      gsap.to(carRef.current, {
        x: "-120%",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".page2 .container .scroll-inner",
          scroller: ".Model",
          start: "top 0%",
          end: "top -100%",
          scrub: 7,
          pin: true,
          anticipatePin: 1,
        }
      })

    }
  }, [selectedModel])





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
                      <button onClick={() => handleSeeMore(car)}>{car.name}</button>
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
      <section ref={detailRef} className="page2">
        {selectedModel && (
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
        )}
      </section>
      <section className="page3" ></section>
    </div>
  )
}

export default Models
