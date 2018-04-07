import { Animation, Frame } from './app/animation';
import { id } from './app/utils';
import { Keyboard } from './app/keyboard';

export class Hero {
    constructor(hero_id, ctx) {
        this.image = id(hero_id);
        this.ctx = ctx;
        this.animations = {};
        this.pos = { x: 0, y: 0 };
        this.initAnimations();
        this.direction = 'right';
        Keyboard.init();
    }
    initAnimations() {
        const options = {
            context: this.ctx,
            image: this.image,
            ticksPerFrame: 8,
        }
        const w = 24;
        const h = 32;

        this.animations.right = new Animation(options)
            .addFrame(2 * w, h, w, h)
            .addFrame(w, h, w, h)
            .addFrame(0, h, w, h)
            .addFrame(w, h, w, h);
        this.animations.left = new Animation(options)
            .addFrame(2 * w, 3 * h, w, h)
            .addFrame(w, 3 * h, w, h)
            .addFrame(0, 3 * h, w, h)
            .addFrame(w, 3 * h, w, h);
        this.animations.down = new Animation(options)
            .addFrame(2 * w, 2 * h, w, h)
            .addFrame(w, 2 * h, w, h)
            .addFrame(0, 2 * h, w, h)
            .addFrame(w, 2 * h, w, h);
        this.animations.up = new Animation(options)
            .addFrame(2 * w, 0, w, h)
            .addFrame(w, 0, w, h)
            .addFrame(0, 0, w, h)
            .addFrame(w, 0, w, h);
    }
    moveRight() {
        this.direction = 'right';
        this.pos.x += 1;
    }
    moveLeft() {
        this.direction = 'left';
        this.pos.x -= 1;
    }
    moveDown() {
        this.direction = 'down';
        this.pos.y += 1;
    }
    moveUp() {
        this.direction = 'up';
        this.pos.y -= 1;
    }
    render() {
        this.animations[this.direction].render(this.pos.x, this.pos.y);
    }
    update() {
        if (Keyboard.Keys[Keyboard.Key.Right] > Keyboard.State.Up) {
            this.moveRight();
        }
        if (Keyboard.Keys[Keyboard.Key.Left] > Keyboard.State.Up) {
            this.moveLeft();
        }
        if (Keyboard.Keys[Keyboard.Key.Up] > Keyboard.State.Up) {
            this.moveUp();
        }
        if (Keyboard.Keys[Keyboard.Key.Down] > Keyboard.State.Up) {
            this.moveDown();
        }
        let reset = 0;
        Object.keys(Keyboard.Keys).forEach(key => reset += Keyboard.Keys[key]);
        this.animations[this.direction].update(!reset);
    }
}
