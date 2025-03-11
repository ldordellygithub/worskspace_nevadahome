import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/Contact.css";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
    if (!formData.subject) newErrors.subject = 'El asunto es obligatorio';
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        alert('Formulario enviado con éxito');
        navigate('/');
      } catch (error) {
        alert('Error al enviar el formulario');
      }
    } else {
      setErrors(validationErrors);
    }
  };
  
  //  contenedor  de  contacto y  formulario

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact</h1>
        <p> Nuestro Gran Equipo de Satisfacción al cliente, cuenta con un personal altamente calificado para darle una mejor atención.</p>
        <p>Estaremos disponibles para todos nuestros usuarios las 24 horas del dia <span> Escribenos.</span></p>
        <p className='wassapth' style={{ color: 'green', marginRight: '8px' }}>
          <i className="fab fa-whatsapp"></i> Whatsapp: +19598665023
        </p>
        <p><FaEnvelope style={{ color: '#D44638', marginRight: '8px' }} />Email: mundonevadaenergy@gmail.com</p>
        <p><FaMapMarkerAlt style={{ color: 'red', marginRight: '8px' }} />Cr.24 #34-10 torre 3 local 202 Cali Colombia</p>
        <img src='https://es.pngtree.com/freepng/professional-woman-customer-support-help-his-client-trough-mobile-phone-call-3d-vector-isometric-illustration_5314880.html' alt='Customersuport' />
        </div>
  
      <div className="contact-form-container">  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;