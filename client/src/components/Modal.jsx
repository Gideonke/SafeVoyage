import React from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-blue-400 rounded-lg p-5 relative">
                <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;