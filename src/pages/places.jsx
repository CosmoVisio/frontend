import React from 'react';
import Card from '../components/Card/Card';
import { Header, Footer } from "@/components";
import data from "../mockes/places"

const App = () => {
  return (
    <>

    <Header />

    <div className='container '>
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
          />
          ))}
    </div>

    <Footer />

  </>
  );
};

export default App;