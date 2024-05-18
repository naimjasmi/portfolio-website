import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ResumeModal = ({ isOpen, onRequestClose, resumeUrl }) => {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-75"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto w-full relative">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕ {/* Unicode character for the close (X) symbol */}
        </button>
        <h2 className="text-2xl mb-4">My Resume</h2>
        <iframe
          src={resumeUrl}
          width="100%"
          height="600px"
          className="border-none"
        />
      </div>
    </Modal>
  );
};

export default ResumeModal;
