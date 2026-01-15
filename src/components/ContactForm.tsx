import { useState, type FormEvent } from "react";
import { createPortal } from "react-dom"; 
import "./ContactForm.css";

interface Props {
  onClose: () => void;
  labels: {
    name: string;
    subject: string;
    message: string;
    btn: string;
  };
}

export const ContactForm = ({ onClose, labels }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    subjectPlaceholder: "",
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
        
        <h3>{labels.message}</h3>
        
        <form className="contact-form-inner" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{labels.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={labels.name}
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">{labels.subject}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={labels.subject}
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{labels.message}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={labels.message}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            {labels.btn} →
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};