import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <h1>Guestbook</h1>
    <Link to='/dashboard'>View Dashboard</Link>
    </>
  )
}
