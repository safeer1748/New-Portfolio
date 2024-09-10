import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Graphic_projects = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const podcast_Album = [
    {
      id: 1,
      url: "/assets/graphics/Podcast & Album/1.jpg",
    },
    {
      id: 2,
      url: "/assets/graphics/Podcast & Album/2.jpg",
    },
    {
      id: 3,
      url: "/assets/graphics/Podcast & Album/3.jpg",
    },
    {
      id: 4,
      url: "/assets/graphics/Podcast & Album/4.jpg",
    },
    {
      id: 5,
      url: "/assets/graphics/Podcast & Album/5.jpg",
    },
    {
      id: 6,
      url: "/assets/graphics/Podcast & Album/6.jpg",
    },
    {
      id: 7,
      url: "/assets/graphics/Podcast & Album/7.jpg",
    },
  ];

  const books=[
    {
        id: 1,
        url: "/assets/graphics/Book/1.jpg",
      },
      {
        id: 2,
        url: "/assets/graphics/Book/2.jpg",
      },
      {
        id: 3,
        url: "/assets/graphics/Book/3.jpg",
      },
      {
        id: 4,
        url: "/assets/graphics/Book/4.jpg",
      },
    ]

    const thumbnails=[
        {
            id: 1,
            url: "/assets/graphics/Thumbnail/1.jpg",
          },
          {
            id: 2,
            url: "/assets/graphics/Thumbnail/2.jpg",
          },
          {
            id: 3,
            url: "/assets/graphics/Thumbnail/3.jpg",
          },
          {
            id: 4,
            url: "/assets/graphics/Thumbnail/4.jpg",
          },
    ]
    const banner_poster=[
        {
            id: 1,
            url: "/assets/graphics/Banner & Poster/1.jpg",
          },
          {
            id: 2,
            url: "/assets/graphics/Banner & Poster/2.jpg",
          },
          {
            id: 3,
            url: "/assets/graphics/Banner & Poster/3.jpg",
          },
          {
            id: 4,
            url: "/assets/graphics/Banner & Poster/4.jpg",
          },
          {
            id: 5,
            url: "/assets/graphics/Banner & Poster/5.jpg",
          },
    ]
  return (
    <div className="w-full">
    <h1 className="font-bold text-xl mb-4">Podcast & Album Covers</h1>
      <div className="w-full">
        <Slider {...settings}>
          {podcast_Album.map((img) => (
            <img key={img.id} src={img.url} className="w-full h-full object-cover px-5" />
          ))}
        </Slider>
      </div>
      <h1 className="font-bold text-xl mt-10 mb-4">Book Covers</h1>
      <div className="w-full">
        <Slider {...settings}>
          {books.map((img) => (
            <img key={img.id} src={img.url} className="w-full h-full object-cover px-5" />
          ))}
        </Slider>
      </div>
      <h1 className="font-bold text-xl mt-10 mb-4">Thumbnails</h1>
      <div className="w-full">
        <Slider {...settings}>
          {thumbnails.map((img) => (
            <img key={img.id} src={img.url} className="w-full h-full object-cover px-5" />
          ))}
        </Slider>
      </div>
      <h1 className="font-bold text-xl mt-10 mb-4">Banners & Posters</h1>
      <div className="w-full">
        <Slider {...settings}>
          {banner_poster.map((img) => (
            <img key={img.id} src={img.url} className="w-full h-full object-cover px-5" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Graphic_projects;
