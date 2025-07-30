import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
      role="dialog"
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl shadow-2xl animate-fadeInScale max-w-lg w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl transition-colors hover:scale-110 duration-200"
        >
          <FaTimes />
        </button>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};