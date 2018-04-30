import { Entity } from "./entity";
import { Sprite } from "./sprite";
import { append, id, clamp, get } from "./utils";
import { Keyboard } from "./keyboard";

export class Player extends Entity {
    constructor(conf) {
        super(conf);

        this.health = 100;
        conf.sprite.img.id = 'player';
        append(id('layer_street'), conf.sprite.img);
        this.initHealthBar();
        this.distance = id('scores');
        this.velocity = 2;
    }
    initHealthBar() {
        this.hbar = get('div');
        this.hbar.style.width = 0;
        this.hbar.style.height = '100%';
        this.hbar.style.background = 'darkslategrey';
        append(id('health-bar'), this.hbar);
    }
    moveRight() {
        this.sprite.setAction('right');
        this.position.x += this.velocity;
    }
    moveLeft() {
        this.sprite.setAction('left');
        this.position.x -= this.velocity;
    }
    moveDown() {
        this.sprite.setAction('down');
        this.position.y += this.velocity;
    }
    moveUp() {
        this.sprite.setAction('up');
        this.position.y -= this.velocity;
    }
    hit() {
        this.health -= 10;
        this.hbar.style.width = 100 - this.health + '%';
    }
    update() {
        this.distance.innerHTML = this.position.x - 50;
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
        this.position.y = clamp(this.position.y, -25, 50);
        this.position.x = clamp(this.position.x, 50, 500000);
        let reset = 0;
        Object.keys(Keyboard.Keys).forEach(key => reset += Keyboard.Keys[key]);
        this.sprite.update(!reset);
        this.sprite.img.style.transform = `translate3d(${this.position.x}px,${this.position.y}px,${this.position.y}px)`;
    }
}
