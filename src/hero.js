import { Animation, Frame } from './app/animation';
import { id, clamp, createCanvas } from './app/utils';
import { Keyboard } from './app/keyboard';
import { Entity } from './app/entity';
import { Point } from './app/point';

export class Hero extends Entity {
    constructor(hero_id) {
        super();
        this.image = id(hero_id);
        this.animations = {};
        this.pos = new Point(0, 210);
        this.width = 24;
        this.height = 32;
        this.initCanvas();
        this.initAnimations();
        this.direction = 'right';
        Keyboard.init();
    }
    initCanvas() {
        const { canvas, ctx, remove } = createCanvas(id('game'));
        this.canvas = canvas;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = 0;
        this.canvas.style.left = '50px';
        this.canvas.style.transform = 'translate3d(30px,250px,1px)';
        this.ctx = ctx;
        this.remove = remove;
    }
    initAnimations() {
        const options = {
            context: this.ctx,
            image: this.image,
            ticksPerFrame: 8,
        }
        const w = this.width;
        const h = this.height;
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
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.canvas.style.transform = `translate3d(100px,${this.pos.y}px,1px)`;
        this.animations[this.direction].render(0, 0);
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
        this.pos.y = clamp(this.pos.y, 210, 260);
        let reset = 0;
        Object.keys(Keyboard.Keys).forEach(key => reset += Keyboard.Keys[key]);
        this.animations[this.direction].update(!reset);
    }
}
