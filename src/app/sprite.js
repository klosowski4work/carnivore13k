import { createCanvas } from "./utils";


export class Sprite {
    /**
     * 
     * @param {Image} srcImg //spriteSheet
     * @param {number} cols //number of columns in spriteSheet
     * @param {number} rows //number of rows in spriteSheet
     * @param {w:number, h:number} frame //frame width, haight
     * @param {*} options //additional options
     */
    constructor(srcImg, cols, rows, frame, options = {}) {
        // const { canvas, ctx } = createCanvas(frame.w, frame.h);

        // this.ctx = ctx;
        // this.canvas = canvas;
        this.img = srcImg;
        this.frame = frame;
        this.frames = []; // frames of current animation  
        this.framesDef = []; // definition of frames
        this.animations = {};

        this.ticksPerFrame = options.ticksPerFrame || 16;

        this.action = '';
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                this.framesDef.push({
                    x: frame.w * c,
                    y: frame.h * r,
                })
            }
        }

        this.frames = [this.framesDef[0]];
        this.curFrame = 0;
        this.tickCount = 0;
    }
    /**
     * 
     * @param {string} action 
     * @param {Array<frameId>} frames 
     */
    addAnimation(action, frameIds) {
        this.animations[action] = [...frameIds];
    }

    /**
     * 
     * @param {string} action 
     */
    setAction(action) {
        this.action = action;
        this.frames = this.animations[action].map((frameIds) => this.framesDef[frameIds]);
    }

    /**
     * 
     * @param {string} action 
     */
    render() {
        const { img, frames, frame, curFrame } = this;
        const cf = this.frames[curFrame];
        img.style.backgroundPositionX = cf.x + 'px';
        img.style.backgroundPositionY = cf.y + 'px';
    }
    update(reset) {
        if (reset) {
            this.tickCount = 0;
            this.curFrame = 0;
        } else {
            if (++this.tickCount > this.ticksPerFrame) {
                this.tickCount = 0;
                if (this.curFrame < this.frames.length - 1) {
                    this.curFrame += 1;
                } else {
                    this.curFrame = 0;
                }
            }
        }
    }
}
