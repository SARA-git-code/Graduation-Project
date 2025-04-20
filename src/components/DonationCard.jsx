import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation, isSelected, onSelect }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`card h-100 w-100 ${isSelected ? 'selected-card' : ''}`}
      onClick={() => onSelect(donation.id)}
    >
      {/* Close Button when selected */}
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(null);
          }}
          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-3 rounded-circle"
          style={{ zIndex: 1000 }}
        >
          ×
        </button>
      )}

      {/* Top Half Image */}
      <div style={{ height: '60%', overflow: 'hidden' ,width:'100%'}}>
        <img
          src={donation.image}
          alt={donation.title}
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Bottom Content */}
      <div className="card-body d-flex flex-column bg-white">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary text-light text-capitalize px-3 py-1 rounded-pill">
            {donation.category}
          </span>
          <small className="text-muted">{donation.timeAgo}</small>
        </div>

        <h5 className="card-title mb-2 fw-semibold">{donation.title}</h5>

        <p className="card-text text-muted small flex-grow-1">{donation.description}</p>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center text-muted small">
            <MapPin size={14} className="me-1" />
            <span>{donation.location}</span>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm rounded-pill"
            onClick={(e) => {
              e.stopPropagation();
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
