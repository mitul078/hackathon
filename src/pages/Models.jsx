import "../styles/model.scss"
import { useRef, useState, useEffect } from "react";
const Models = () => {

  const data = [
    { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/31462af8-f089-4e16-b317-8284e548402a/33c2024713deddf479c905c50fc7462c/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "New Elroq" },
    { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/4db96715-f601-41f9-b56e-1c233467d022/780c0103ac6a552b4bc1ebeff0197698/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "New Enyaq Coupe" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/91c79962-6d6f-4edf-9ba8-850d5291f230/5637a7c0b8a8c2aabef3774c51526c33/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "New Enyaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/4e292bc0-1e0f-4a68-9f16-17b2147e7a04/42eb9542c64f0a6f0f88cf212239e05b/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Fabia" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/e17cfbd0-34a8-4e8a-961c-ff37ff103a6d/74aac25045ed917334bbcb51bc2ba3c7/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Scala" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/e17cfbd0-34a8-4e8a-961c-ff37ff103a6d/74aac25045ed917334bbcb51bc2ba3c7/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Octavia" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/e17cfbd0-34a8-4e8a-961c-ff37ff103a6d/74aac25045ed917334bbcb51bc2ba3c7/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Octavia Combi" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/419905ac-0ff4-4b43-a9f0-9072aa22f8bc/e9e9e832d2e57d19d6259dff1902ab56/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Superb" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/90d92954-d76b-426b-a632-78d090bb610d/608ddd81b53b35ce7708f733a986785a/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Superb Combi" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/3f9a48f9-7eaf-4c54-827a-75df09c8a7af/b1435165a0eb6b27913e74063be6a7d8/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kamiq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/fc6e03dd-e413-4f84-b523-ef8286919edf/2a5a108670a5fbc0445d2edf5b434dcf/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Karoq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/6f0160c7-bbe3-41f6-80eb-0fc50b2ff459/29ddbb642e9690b4b56c717fa807bce2/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kodiaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/35d30500-419f-4fb9-8492-fd2a7db5c898/7e978914e5d02d3b1a4d27e4d5a663d8/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kylaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/ce160174-cd93-4226-89bc-2e043675aab6/e78a94b06520b92a6f0b39dfb9c0fcd2/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Kushaq" }, { imgSRC: "https://cdn.skoda-auto.com/images/sites/encom-v2/3021d3f7-b935-4dce-8eda-d4e3f3ddc567/82a11a7598b5322046e202a36b789775/ImporterHeaderModule/0a0577a4b4a65f568c46bf666ee982cd49a14885f5d4cf1628a90ac73176b307/Default_bp1200_1.webp", URL: "", name: "Slavia" },

  ]


  const detailRef = useRef(null);
  const scrollToDetails = () => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [selectedModel, setSelectedModel] = useState(null);
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

  return (

    <div className="Model">
      <section className="page1" >
        <div className="container">
          <div className="header">
            <p>Only The Best Cars</p>
            <h1>Our Vehicles</h1>
            <h3>we provide our customers with the most incredible driving emotions. <br />Thats why we have only world class cars in our fleet</h3>
          </div>
          <div>
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


        </div>
      </section>
      <section ref={detailRef} className="page2">
        {selectedModel && (
          <div>
            <h2>{selectedModel.name}</h2>
            <img src={selectedModel.imgSRC} alt={selectedModel.name} />
          </div>
        )}
      </section>
    </div>
  )
}

export default Models
