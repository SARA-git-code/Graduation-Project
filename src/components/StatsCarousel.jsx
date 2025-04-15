import React from "react";
import Slider from "react-slick";
import { Gift, Users, Heart } from "lucide-react";

const StatsCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768, // mobile
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024, // tablets
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1400, // desktops
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
  
    const stats = [
      {
        icon: <Gift className="text-primary" size={40} />,
        title: "1,234+",
        subtitle: "Items Donated",
      },
      {
        icon: <Users className="text-primary" size={40} />,
        title: "5,678+",
        subtitle: "Active Members",
      },
      {
        icon: <Heart className="text-primary" size={40} />,
        title: "890+",
        subtitle: "Lives Impacted",
      },
    ];
  
    return (
      <section className="my-5 text-center">
        <div className="container">
          <Slider {...settings}>
            {stats.map((stat, index) => (
              <div key={index} className="px-3">
                <div
                  className="cbg p-4 rounded shadow-sm mx-auto transition-all hover:shadow-lg"
                  style={{ maxWidth: "400px" }}
                >
                  <div
                    className="cbg rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="h2 fw-bold">{stat.title}</h3>
                  <p className="text-muted">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default StatsCarousel;