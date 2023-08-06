import React, { useState, useEffect } from 'react';
import { Layout } from '../components';
import '../App.css';

const FormSection = () => (
  <div className="flex-1 w-full md:max-w-3xl " id="for">
    
      <form action="" method="post">
        <div className="mb-4 flex justify-between">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="username" className="w-8 h-8" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2311/2311524.png" alt="threedot" className='w-6 h-6' />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="Title" className="block font-semibold">Title</label>
          <h1>banana</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="Quantity" className="block font-semibold">Quantity</label>
          <h1>5</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="ListForDays" className="block font-semibold">List For Days</label>
          <h1>2 </h1>
        </div>
        <div className="mb-4 flex justify-between">
          <div>
            <label htmlFor="UploadTime" className="block font-semibold">Upload time</label>
            <h1>5.00 pm</h1>
          </div>
          <div>
            <label htmlFor="EndTime" className="block font-semibold">End time</label>
            <h1>6.00 am</h1>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="Description" className="block font-semibold">Description</label>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem!</p>
        </div>
      </form>
    </div>
 
);

const imageList = [
  {
    imgSrc: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    imgAlt: 'chickenbriyani',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    imgAlt: 'strawbery burger',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    imgAlt: 'desssert',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/5718069/pexels-photo-5718069.jpeg',
    imgAlt: 'mojitto',
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageList.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      {imageList.map((image, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'block' : 'hidden'}`}>
          <img src={image.imgSrc} alt={image.imgAlt} className="object-cover"  style={{ width: '500px', height: '500px'}}/>
        </div>
      ))}
    </div>
  );
};

const FoodPosts = () => {
  return (
    <Layout>

      <div className="" >
        <div className="container mx-auto border  border-black mx-auto my-auto flex  w-full md:max-w-2xl justify-center align-center" id='food'>
          <div className="slideshow-container flex-3 w-full md:max-w-2xl md:mr-4" >
            <Slideshow />
          </div>
          <FormSection />
        </div>
      </div>

    </Layout>
  );
};

export default FoodPosts;
