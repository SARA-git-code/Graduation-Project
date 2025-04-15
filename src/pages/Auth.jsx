import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container py-5">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h1 className="h2 fw-bold mb-4">{isSignUp ? 'Create Account' : 'Sign In'}</h1>
        
        <div className="mb-4">
          <div className="d-flex gap-2">
            <button
              className={`flex-1 btn ${!isSignUp ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
            <button
              className={`flex-1 btn ${isSignUp ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>
        </div>

        <form className="space-y-4">
          {isSignUp && (
            <div>
              <label className="form-label">Name</label>
              <div className="input-group">
                <span className="input-group-text"><User size={18} /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>
          )}
          
          <div>
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text"><Mail size={18} /></span>
              <input
                type="email"
                className="form-control"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><Lock size={18} /></span>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
