import { Entity } from "./entity";
import { Sprite } from "./sprite";
import { get, clamp, random, distance } from "./utils";
import { runInThisContext } from "vm";
import { ASSETS } from "../gfx/assets";

const MAX_SHOTS_NUMBER = 10;
const MAX_SHOT_SPEED = 15;
export class Enemy extends Entity {
    constructor(conf) {
        const img = new Image();
        img.src = ASSETS.SHIT;
        img.style.width = '20px';
        img.style.height = '20px';
        img.style.zIndex = 10;
        img.id = "emiter";
        conf.sprite = new Sprite(img, 1, 1, { w: 10, h: 10 });
        super(conf);
        this.player = conf.player;
        this.counter = 100;
        this.counterBase = 500;
        this.shots = [];
        this.lastShot = 0;
        this.speedShot = 2;
        this.initShots();
    }
    setParent(parent) {
        this.sprite.setParent(parent);
        this.shots.forEach(shot => shot.sprite.setParent(parent));
    }
    initShots() {
        for (let i = 0; i < MAX_SHOTS_NUMBER; i++) {
            const img = get('div');
            img.style.backgroundImage = `url(${ASSETS.FOOD})`;
            img.style.width = '20px';
            img.style.height = '20px';
            img.style.backgroundSize = '64px 20px';
            img.className = 'shot';
            const sprite = new Sprite(img, 3, 1, { w: 42, h: 40 });
            sprite.addAnimation('food0', [0]);
            sprite.addAnimation('food1', [1]);
            sprite.addAnimation('food2', [2]);
            this.shots.push(new Entity({
                position: { x: -100, y: 0, z: 0 },
                sprite
            }));
        }
    }
    emit() {
        let { x, y, z } = this.position;
        console.log('emit', this.lastShot);
        let shot = this.shots[this.lastShot++];
        this.lastShot = this.lastShot % MAX_SHOTS_NUMBER;
        y = (Math.cos(y) * 35) + 30;
        shot.position.x = x;
        shot.position.y = y;
        shot.sprite.setAction(`food${random(3) - 1}`);
    }
    update() {
        const { x, y, z } = this.position;
        const { x: x1, y: y1 } = this.player.position;
        this.position.y += 0.05;
        this.speedShot += 0.002;
        this.shots.forEach(shot => {
            const { x: x2, y: y2 } = shot.position;
            if (distance(x1, y1, x2, y2) < 20) {
                shot.position.x = -100;
                this.player.hit();
            };
            shot.position.x -= clamp(this.speedShot, 2, MAX_SHOT_SPEED);
            shot.update();
        });
        this.sprite.img.style.transform = `translate3d(${x}px,${(Math.cos(y) * 35) + 30}px,${z}px)`;
        this.sprite.update();
        if (--this.counter < 0) {
            console.log('emit', this.counter);
            this.counterBase -= 30;
            this.counterBase = clamp(this.counterBase, 100);
            this.counter = clamp(random(50, this.counterBase), 50, this.counterBase);
            this.emit();
        };
        if (this._conf.onUpdate) this._conf.onUpdate();
    };
    render() {
        this.sprite.render();
        this.shots.forEach((shot) => shot.render());
        if (this._conf.onRender) this._conf.onRender();
    };
}