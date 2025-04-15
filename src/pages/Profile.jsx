import React from 'react';

const Profile = ({ onClose }) => (
  <div>
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <h5 className="mb-0">Profile</h5>
      <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>
        ✕
      </button>
    </div>
    <div className="text-center p-4">
    
return (
   <div className="container" style={{ maxWidth: '600px' }}>
     <div className="card p-4">
       <h1 className="h4 fw-bold mb-4">Profile</h1>
       <div className="mb-3">
         <label className="form-label">Name</label>
         <input
           type="text"
           className="form-control"
           placeholder="Your name"
         />
       </div>
       <div className="mb-4">
         <label className="form-label">Email</label>
         <input
           type="email"
           className="form-control"
           placeholder="your@email.com"
         />
       </div>
       <button
         type="submit"
         className="btn btn-primary w-100"
       >
         Save Changes
       </button>
     </div>
   </div>
 );
    </div>
  </div>
);


export default Profile;
