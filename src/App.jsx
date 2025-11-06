import React, { useEffect, useState } from 'react';
import './App.css'
import Intro from './components/intro';
import Background from './components/Background';
import avarta from './assets/avarta.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './components/SpotlightCard';

export default function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const showNotification = (text) => {
    setMessage(text);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleDiscordClicked = (e) => {
    e.currentTarget.style.cursor = "pointer";
    showNotification("Copied Discord ID to clipboard!");
    navigator.clipboard.writeText("dat_0963");
    setTimeout(() => {
      window.open("https://discord.com/", "_blank");
    }, 2000);
  };

  const handlePortfolioClicked = () => {
    showNotification("Updating....");
  }

  const handleShoppingClicked = () => {
    showNotification("Updating....");
  }

  return (
    <>
      <Intro />
      <Background
        glitchSpeed={10}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
      />

      {/* content */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-none text-white text-4xl" style={{ zIndex: "1" }}>
        <img className='w-52 h-52 object-cover rounded-full' src={avarta} />
        <p className='m-10 '>Le Quoc Dat (David Lee)</p>

        {/* socials */}
        <div className="flex flex-wrap justify-center gap-5">
          {/* facebook */}
          <a href="https://www.facebook.com/dat.lequocdat6996/">
            <img alt='Facebook' className='w-5 h-5 object-cover rounded-full' src="/icon/Facebook Brand Resource Center.gif" />
          </a>

          {/* instagram */}
          <a href="https://www.instagram.com/lequocdat113/">
            <img alt='Instagram' className='w-5 h-5 object-cover rounded-full' src="/icon/instagram.gif" />
          </a>

          {/* tiktok */}
          <a href="https://www.tiktok.com/@dat.official96">
            <img alt='TikTok' className='w-5 h-5 object-cover rounded-full' src="/icon/Tik Tok.gif" />
          </a>

          {/* discord */}
          <img onClick={handleDiscordClicked}
            onMouseOver={(e) => (e.currentTarget.style.cursor = "pointer")}
            onMouseOut={(e) => (e.currentTarget.style.cursor = "auto")}
            alt='Discord' className='w-5 h-5 object-cover rounded-full' src="/icon/Discord.gif" />

          {/* youtube */}
          <a href="https://www.youtube.com/channel/UCM3IHacJ6X_lutcgg9eEo2Q">
            <img alt='YouTube' className='w-5 h-5 object-cover rounded-full' src="/icon/youtube.gif" />
          </a>
        </div>

        {/* links */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {/* spotify */}
          <SpotlightCard>
            <a href="https://open.spotify.com/user/lusjomyqa28j03k56htnqsnna?si=2a59c6857d554b02" className='flex items-center'>
              <img alt='Spotify' className='w-10 h-10 object-cover rounded-full inline' src="/icon/Spotify Animation.gif" />
              <span className='ml-7 mr-7 text-lg text-center'>My Spotify</span>
            </a>
          </SpotlightCard>

          {/* steam */}
          <SpotlightCard>
            <a href="https://steamcommunity.com/profiles/76561199013414648/" className='flex items-center'>
              <img alt='Steam' className='w-10 h-10 object-cover rounded-full inline' src="/icon/Steam_icon_logo.svg.png" />
              <span className='ml-7 mr-7 text-lg'>My Steam</span>
            </a>
          </SpotlightCard>
          
          {/* portfolio */}
          <SpotlightCard>
            <a href="#" className='flex items-center' onClick={handlePortfolioClicked}>
              <img alt='Portfolio' className='w-10 h-10 object-cover rounded-full inline' src="/icon/portfolio.gif" />
              <span className='ml-7 mr-7 text-lg'>My Portfolio</span>
            </a>
          </SpotlightCard>
        </div>
        <div>
          <p onClick={handleShoppingClicked} className='relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-4 text-lg mt-5'>SHOPPING</p>
        </div>
      </div>

      {/* copyright */}
        <footer className="text-sm text-neutral-400 flex flex-col items-center justify-center bg-none text-white mt-10 mb-5">
          <p>© 2025 Le Quoc Dat. All rights reserved.</p>
        </footer>

      {/* notification */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-xl"
            style={{ zIndex: "100" }} // Thêm zIndex cao
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}