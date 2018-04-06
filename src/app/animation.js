export class Frame {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

export class Animation {
    constructor(options) {
        this.context = options.context;
        this.image = options.image;
        this.frameId = 0;
        this.frames = [];
        this.ticksPerFrame = options.ticksPerFrame;
        this.tickCount = 0;

    }
    addFrame(frame) {
        this.frames.push(frame);
        return this;
    }
    render(x, y, mirrored) {
        this.context.save();
        const cf = this.frames[this.frameId];
        if (mirrored) {
            this.context.scale(-1, 1);
            this.context.drawImage(
                this.image,
                cf.x,
                cf.y,
                cf.w,
                cf.h,
                -x - cf.w,
                y,
                cf.w,
                cf.h
            );
        } else {
            this.context.drawImage(
                this.image,
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
        this.context.restore();
    }
    update(reset) {
        if (reset) {
            this.tickCount = 0;
            this.frameId = 0;
        } else {
            this.tickCount += 1;
            if (this.tickCount > this.ticksPerFrame) {
                this.tickCount = 0;
                if (this.frameId < this.frames.length - 1) {
                    this.frameId += 1;
                } else {
                    this.frameId = 0;
                }
            }
        }
    }
}














