import { Animation, Frame } from './app/animation';

export class Hero {
    constructor(image, ctx) {
        this.image = new Image();
        this.image.src = image;
        this.ctx = ctx;
        this.animations = {};
        this.pos = { x: 0, y: 0 };
        this.initAnimations();
        this.direction = 'right';
    }
    initAnimations() {
        const options = {
            context: this.ctx,
            image: this.image,
            ticksPerFrame: 6,
        }
        const w = 32; 
        const h = 55;

        this.animations.right = new Animation(options)
            .addFrame(new Frame(4 * w, 0, w, h))
            .addFrame(new Frame(5 * w, 0, w, h))
            .addFrame(new Frame(4 * w, 0, w, h))
            .addFrame(new Frame(3 * w, 0, w, h));
        this.animations.left = new Animation(options)
            .addFrame(new Frame(10 * w, 0, w, h))
            .addFrame(new Frame(9 * w, 0, w, h))
            .addFrame(new Frame(10 * w, 0, w, h))
            .addFrame(new Frame(11 * w, 0, w, h));
        this.animations.up = new Animation(options)
            .addFrame(new Frame(1 * w, 0, w, h))
            .addFrame(new Frame(2 * w, 0, w, h))
            .addFrame(new Frame(1 * w, 0, w, h))
            .addFrame(new Frame(0 * w, 0, w, h));
        this.animations.down = new Animation(options)
            .addFrame(new Frame(7 * w, 0, w, h))
            .addFrame(new Frame(8 * w, 0, w, h))
            .addFrame(new Frame(7 * w, 0, w, h))
            .addFrame(new Frame(6 * w, 0, w, h));
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
    update(reset) {
        this.animations[this.direction].update(reset);
    }
}

export const heroImage = new Image().src = "data:image/png;base64,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";
