import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAllButton = () => {
  const navigate = useNavigate();

  return (
    <button className="btn btn-primary" onClick={() => { navigate('/packages')}}>
      View All Packages
    </button>
  );
};

export default ViewAllButton;
