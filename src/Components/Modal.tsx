import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define CardData interface
interface CardData {
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkUrl: string;
}

// Define ModalProps interface
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CardData;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-3">{data.title}</h2>
            <p className="text-gray-600 mb-4">{data.description}</p>
            <a
              href={data.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {data.linkText}
            </a>
            <div className="mt-4 text-right">
              <button
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
