// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="flex  justify-center items-center">
        <div className="flex items-center justify-start space-x-4">
          {/* Icona Email */}
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          {/* Icona LinkedIn */}
          <Link href='https://it.linkedin.com/in/ciro-moscarella-05339024a' blank>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
        </div>

       <div className="flex flex-grow text-center justify-center items-center">
        
        </div>

        <div className="flex items-center justify-end space-x-4">
          {/* Nome e testo copyright */}
          <div>
            <p>Created By MoCi</p>
            <p>&copy; 2023 MoCi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
