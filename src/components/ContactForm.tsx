import { useState, type FormEvent } from "react";
import { createPortal } from "react-dom"; 
import "./ContactForm.css";

interface Props {
  onClose: () => void;
}

export const ContactForm = ({ onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const myEmail = "jhordypaulsb2@gmail.com";

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hola Jhordy, soy ${formData.name} y quiero contactarte para \n\n${formData.message}`
    );

    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    
    onClose();
  };

  return createPortal(
    <div className="form-modal-overlay" onClick={onClose}>
      <div 
        className="form-modal-content" 
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="form-modal-close" onClick={onClose}>×</button>
        
        <h3>Mensaje</h3>
        
        <form className="contact-form-inner" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Tu Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej. Jhordy Marcillo"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Ej. Oportunidad laboral / Proyecto en mente"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Quiero contactarte para..."
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Abrir correo y enviar →
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};