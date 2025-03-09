/*dependecia  necesarias*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/Contact.css";

function Contact() {
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
      // Lógica para enviar el formulario
      try {
        // Aquí puedes agregar la lógica para enviar el formulario a tu backend
        alert('Formulario enviado con éxito');
        navigate('/'); // Redirigir a la página de inicio después de enviar el formulario
      } catch (error) {
        alert('Error al enviar el formulario');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-form-container">

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;

