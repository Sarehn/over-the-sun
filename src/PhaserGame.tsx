import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { config } from './Config';

const PhaserGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;    

    // Create the Phaser game instance
    const game = new Phaser.Game(config);

    // Clean up Phaser game on component unmount
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainerRef}></div>;
};

export default PhaserGame;
