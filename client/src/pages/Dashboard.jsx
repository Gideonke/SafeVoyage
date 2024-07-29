import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

function ReviewForm() {
  const [formData, setFormData] = useState({
    travel_agency: '',
    rating: '',
    comment: ''
  });
  const [travelAgencies, setTravelAgencies] = useState([]);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/travelagency/')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTravelAgencies(data);
        } else {
          setTravelAgencies([]);
        }
      })
      .catch(error => {
        console.error('Error fetching travel agencies:', error);
        setTravelAgencies([]);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = (data) => {
    const errors = {};
    if (!data.travel_agency) errors.travel_agency = 'Travel agency is required';
    if (!data.rating) errors.rating = 'Rating is required';
    if (!data.comment) errors.comment = 'Comment is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      const url = 'http://127.0.0.1:8000/api/reviews/';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      fetch(url, options)
        .then((res) => {
          if (!res.ok) {
            return res.json().then((errorData) => {
              setErrors({ ...errors, ...errorData });
            });
          }
          return res.json();
        })
        .then((data) => {
          console.log('Review submitted:', data);
          setSuccessMessage('Review submitted successfully!');
          setTimeout(() => {
            navigate('/reviews'); // Assuming you have a reviews page to navigate to
          }, 2000);
        })
        .catch((error) => console.error('Error submitting review:', error));
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='mt-[20vh]'>
      <div className="flex justify-around items-center">
        {/* Card Components */}
        <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8">
          <IoIosContact size={150}/>
          <h1 className="text-3xl">RihanAliam Tr</h1>
          <h2 className='text-2xl'>Under Review</h2>
          <p className="text-2xl text-center">
            We verify the legitimacy of travel agencies, ensuring your trips are safe and secure.
          </p>
          <h1 className="flex gap-3 items-center">
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-white"/>
            <FaStar size={40} className="text-white"/>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-6">
          <IoIosContact size={150}/>        
          <h1 className="text-3xl">New JetTravels</h1>
          <h2 className='text-2xl'>Verified</h2>
          <p className="text-2xl text-center">
            Our mission is to provide travelers with peace of mind by checking the credibility of travel agencies worldwide.
          </p>
          <h1 className="flex gap-3 items-center">
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-6">
          <IoIosContact size={150}/>     
          <h1 className="text-3xl">Airways cors</h1>
          <h2 className='text-2xl'>Verified</h2>
          <p className="text-2xl text-center">
            We maintain transparency in our verification process, providing you with trustworthy information.
          </p>
          <h1 className="flex gap-3 items-center">
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
            <FaStar size={40} className="text-yellow-400"/>
          </h1>
        </div>
      </div>
      <div className="h-[95vh] bg-blue-400 mt-[12vh] flex justify-around items-center">
        <div className="w-[600px] bg-slate-200 flex justify-center items-center flex-col rounded-2xl">
          <div>
            <h1 className="text-3xl mb-32 text-black mt-8">Write a Review</h1>
          </div>
          <form className="w-[500px] flex flex-col gap-10" onSubmit={handleSubmit}>
            <select
              name="travel_agency"
              value={formData.travel_agency}
              onChange={handleChange}
              className="rounded-2xl py-4 bg-white text-2xl px-4"
            >
              <option value="">Select a Travel Agency</option>
              {travelAgencies.map((agency) => (
                <option key={agency.id} value={agency.id}>
                  {agency.name}
                </option>
              ))}
            </select>
            {errors.travel_agency && <p className="text-red-500">{errors.travel_agency}</p>}

            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              value={formData.rating}
              onChange={handleChange}
              className="rounded-2xl py-4 bg-white text-2xl px-4"
              min="1"
              max="5"
            />
            {errors.rating && <p className="text-red-500">{errors.rating}</p>}

            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              className="rounded-2xl py-4 bg-white text-2xl px-4"
              rows="5"
            />
            {errors.comment && <p className="text-red-500">{errors.comment}</p>}

            <button
              type="submit"
              className="text-2xl mt-10 bg-white rounded-full py-2 px-4 flex justify-center items-center w-[30%] ml-[30%]"
            >
              Submit Review
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;



