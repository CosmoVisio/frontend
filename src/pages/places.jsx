import React, { useState } from "react";
import Card from "../components/card/Card";
import { Header, Footer } from "@/components";
import data from "../mockes/places";
import Modal from "../components/modal/modal"; // Certifique-se de ajustar o caminho conforme necessário

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    console.log("select card");
    setSelectedCard(card);
  };

  return (
    <>
      <Header />

      <div className="d-flex flex-wrap justify-content-center py-3 px-5">
        {data.map((item) => (
          <Card
            key={item.id}
            imageName={item.imageUrl}
            title={item.title}
            subtitle={item.subtitle}
            startDate={item.startDate}
            endDate={item.endDate}
            difficulty={item.difficulty}
            price={item.price}
            link={item.link}
            openModal={() => openModal(item)}
            tag={item.tag}
            description={item.description}
            whatsappNumber={item.promoterPhone}
            YWF={item.YWF}
            location={item.location}
            promoterName={item.promoterName}
            promoterEmail={item.promoterEmail}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default App;
