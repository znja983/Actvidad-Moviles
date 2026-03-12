import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './LoginModal.css';

function LoginModal({ isOpen, onClose }) {
  const { register, login } = useContext(AuthContext);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      setMessageType('error');
      setMessage('Por favor completa todos los campos');
      return;
    }
    
    const result = register(formData.email, formData.password, formData.name);
    setMessageType(result.success ? 'success' : 'error');
    setMessage(result.message);
    
    if (result.success) {
      setTimeout(() => {
        setIsRegistering(false);
        setFormData({ email: '', password: '', name: '' });
        setMessage('');
      }, 1500);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessageType('error');
      setMessage('Por favor completa email y contraseña');
      return;
    }
    
    const result = login(formData.email, formData.password);
    setMessageType(result.success ? 'success' : 'error');
    setMessage(result.message);
    
    if (result.success) {
      setTimeout(() => {
        onClose();
        setFormData({ email: '', password: '', name: '' });
        setMessage('');
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal-close" onClick={onClose}>✕</button>

        {isRegistering ? (
          // FORMULARIO DE REGISTRO
          <div className="login-modal-form">
            <h2>Registrarse</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mínimo 6 caracteres"
                />
              </div>
              
              {message && (
                <div className={`form-message ${messageType}`}>
                  {message}
                </div>
              )}

              <button type="submit" className="form-btn">Registrarse</button>
            </form>

            <p className="form-footer">
              ¿Ya tienes cuenta?{' '}
              <button 
                className="form-link-btn"
                onClick={() => {
                  setIsRegistering(false);
                  setFormData({ email: '', password: '', name: '' });
                  setMessage('');
                }}
              >
                Inicia sesión
              </button>
            </p>
          </div>
        ) : (
          // FORMULARIO DE LOGIN
          <div className="login-modal-form">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Tu contraseña"
                />
              </div>

              {message && (
                <div className={`form-message ${messageType}`}>
                  {message}
                </div>
              )}

              <button type="submit" className="form-btn">Iniciar Sesión</button>
            </form>

            <p className="form-footer">
              ¿No tienes cuenta?{' '}
              <button 
                className="form-link-btn"
                onClick={() => {
                  setIsRegistering(true);
                  setFormData({ email: '', password: '', name: '' });
                  setMessage('');
                }}
              >
                Regístrate
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;