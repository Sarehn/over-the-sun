import Phaser from "phaser"
import space from "./assets/skies/space3.png";
import logo from "./assets/sprites/phaser3-logo.png";
import particle from "./assets/particles/red.png";

export const width = window.innerWidth;
export const height = window.innerHeight;

export default class Scene extends Phaser.Scene {

    constructor(){
        super();
    }

    preload(){
        this.load.image('sky', space);
        this.load.image('logo', logo);
        this.load.image('red', particle);
    }

    create() {
		const background = this.add.image(width/2, height/2, 'sky')
        background.setDisplaySize(width, height)
        
		const emitter = this.add.particles(0, 0, "red", {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: "ADD",
        });

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		emitter.startFollow(logo)
	}
}

