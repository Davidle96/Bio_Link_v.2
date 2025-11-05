import React from 'react';
import './App.css'
import Intro from './components/intro';
import Background from './components/Background';

export default function App() {

  return (
    <>
      <Intro />
      <Background
        glitchSpeed={10}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-none text-white text-4xl font-bold" style={{ zIndex: "1" }}>
        Tailwind is working!
      </div>
    </>
  )
}