export class Frame {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

export function Animation(options) {
    const {
        context,
        image,
        ticksPerFrame
    } = options;
    const frames = [];
    let frameId = 0;
    let tickCount = 0;

    /**
     * addFrame
     * @param {*} x 
     * @param {*} y 
     * @param {*} w 
     * @param {*} h 
     */
    this.addFrame = (x, y, w, h) => {
        frames.push(new Frame(x, y, w, h));
        return this;
    }
    this.render = (x, y, mirrored) => {
        context.save();
        const cf = frames[frameId];
        if (mirrored) {
            context.scale(-1, 1);
            context.drawImage(
            image,
                cf.x,
                cf.y,
                cf.w,
                cf.h, -x - cf.w,
                y,
                cf.w,
                cf.h
            );
        } else {
            context.drawImage(
                image,
                cf.x,
                cf.y,
                cf.w,
                cf.h,
                x,
                y,
                cf.w,
                cf.h
            );
        }
        context.restore();
    }
    this.update = (reset) => {
        if (reset) {
            tickCount = 0;
            frameId = 0;
        } else {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameId < frames.length - 1) {
                    frameId += 1;
                } else {
                    frameId = 0;
                }
            }
        }
    }
}