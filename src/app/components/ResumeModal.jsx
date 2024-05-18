import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const ResumeModal = ({ isOpen, onRequestClose, resumeUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto w-full">
        <h2 className="text-2xl mb-4">My Resume</h2>
        <iframe
          src={resumeUrl}
          width="100%"
          height="600px"
          className="border-none"
        />
        <button
          onClick={onRequestClose}
          className="mt-4 px-4 py-2 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ResumeModal;
