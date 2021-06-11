import React from 'react';
import { Link } from 'react-router-dom';
import { WriteButton } from './styles';

const WriteBtn: React.FC = () => {
  return (
    <WriteButton>
      <div className="writeWrap">
        <Link to="/write">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#2656FF" />
            <path
              d="M34.3433 59.3434V65.6566H40.6564L59.2759 47.037L52.9628 40.7239L34.3433 59.3434ZM64.1581 42.1549C64.8146 41.4983 64.8146 40.4377 64.1581 39.7812L60.2187 35.8418C59.5621 35.1852 58.5015 35.1852 57.8449 35.8418L54.7641 38.9226L61.0773 45.2357L64.1581 42.1549Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </WriteButton>
  );
};

export default WriteBtn;
