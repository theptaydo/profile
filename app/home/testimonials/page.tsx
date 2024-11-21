'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/home/testimonials.css';
import useScrollEffect from '@/app/hook/useScrollEffect';
import '@/styles/animation.css';
export default function Testimonials() {
  useScrollEffect();
  return (

    <>

      <section id="testimonials" className="testimonials section dark-background">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="animations left carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center text-center p-4 bg-dark text-white">
                <img
                  src="/img/testimonials/testimonials-1.jpg"
                  alt="John Larson"
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px' }}
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <div className="stars my-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="testimonial-text">
                  <i className="bi bi-quote quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                  labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-4 bg-dark text-white">
                <img
                  src="/img/testimonials/testimonials-1.jpg"
                  alt="John Larson"
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px' }}
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <div className="stars my-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="testimonial-text">
                  <i className="bi bi-quote quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                  labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

    </>
  );
}
