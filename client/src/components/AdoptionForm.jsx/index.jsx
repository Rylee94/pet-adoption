import React, { useState } from 'react';
import pets from '/images/pets.jpeg'

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petPreference: '',
    additionalInfo: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
    // You can reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      petPreference: '',
      additionalInfo: '',
    });
    // Set the submission status to true
    setIsSubmitted(true);
  };

  return (
    <div class="form">
      <h1 class="header-pp">Adoption Form</h1>
      {isSubmitted ? (
        <p>Thank you for submitting the adoption form!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <br></br>
          <label>
            Name:
            <br></br>
            <input class="name-box" type="text" name="name" value={formData.name} onChange={handleChange} style={{height: '40px', width: '200px'}} required />
          </label>
          <br />
          <br></br>
          <label>
            Email:
            <br></br>
            <input
            class="email-box"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{height: '40px', width: '200px'}}
              required
            />
          </label>
          <br />
          <br></br>
          <label>
            Phone:
            <br></br>
            <input
              class="phone-box"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{height: '40px', width: '200px'}}
              required
            />
          </label>
          <br />
          {/* <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </label> */}
          <br />
          <label>
            Pet Preference:
            <br></br>
            <input
            class="preference-box"
              type="text"
              name="petPreference"
              value={formData.petPreference}
              onChange={handleChange}
              style={{height: '40px', width: '200px'}}
              required
            />
          </label>
          <br />
          <br></br>
          <label>
            Additional Information:
            <br></br>
            <textarea
            class="info-box"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              style={{height: '100px', width: '400px'}}
            />
          </label>
          <br />
          <br></br>
          <br></br>
          <button class="submit" type="submit" style={{width:'100px', height: '50px', fontSize: '1.1rem', fontWeight: 'bold'}}>Submit</button>
        </form>
      )}
      <div>
        <img src={pets} alt="Pets" style={{ width: '1000px', height: '500px'}}/>;
      </div>
    </div>
  );
};

export default AdoptionForm;
