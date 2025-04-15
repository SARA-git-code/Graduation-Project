import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const DonationCard = ({ donation, isSelected, onSelect }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`card h-100 ${isSelected ? 'selected-card' : ''}`}
      onClick={() => onSelect(donation.id)}
      style={{ cursor: 'pointer' }}
    >
        {/* Show Close Button when a card is selected */}
        {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(null); // Close the selected card
    
          }}
          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-3"
          style={{ zIndex: 10000 }} // Ensure it stays above everything
        >
          ×
        </button>
      )}
      <img 
        src={donation.image}
        alt={donation.title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary text-light text-capitalize">{donation.category}</span>
          <small className="text-muted">{donation.timeAgo}</small>
        </div>
        <h5 className="card-title mb-2">{donation.title}</h5>
        <p className="card-text text-muted small flex-grow-1">{donation.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center text-muted small">
            <MapPin size={14} className="me-1" />
            <span>{donation.location}</span>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={(e) => {
              e.stopPropagation(); // prevent the card click event
              navigate('/Profile');
            }}
          >
            Contact Donor
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default DonationCard;
