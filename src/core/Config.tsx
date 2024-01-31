import Scene from "../scenes/Scene"
import { width, height } from "../scenes/Scene";


export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width,
    height,
    backgroundColor: '#EE82EE',
    scale: {
      mode: Phaser.Scale.FIT
    },
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
    },
    scene: Scene,
  };