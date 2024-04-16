
'use client'
import React from 'react';
import useSocketIO from '../services/useSocketIO';

const MyPage: React.FC = () => {
  const socketData = useSocketIO();

  console.log("")

  return (
    <div>
      <h1>My Next.js Page</h1>
      <ul>
        {socketData.map((data, index) => (
          <li key={index}>
            <strong>Topic:</strong> {data.topic}, <strong>Message:</strong> {data.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPage;
