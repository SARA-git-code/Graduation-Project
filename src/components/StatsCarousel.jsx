import React from "react";
import { Gift, Users, Heart } from "lucide-react";

const StatsCarousel = () => {
   
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
        <div className="row justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg-4 px-4 mb-5">
              <div
                className="cbg rounded shadow-sm mx-auto transition-all hover:shadow-lg"
                style={{
                  padding: "120px 80px", // More space inside the card
                  maxWidth: "100%",
                  minHeight: "500px", // Taller card
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "100px", // Bigger icon circle
                    height: "100px",
                    backgroundColor: "#fcfefe",
                    fontSize: "2.5rem", // Make sure the icon scales if it's text-based
                  }}
                >
                  {stat.icon}
                </div>
                <h3 className="display-5 fw-bold">{stat.title}</h3> {/* Bigger title */}
                <p className="fs-5 text-muted">{stat.subtitle}</p> {/* Larger text */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    
    );
  };
  
  export default StatsCarousel;