import { Entity } from "./entity";
import { Sprite } from "./sprite";
import { append, id, clamp } from "./utils";
import { Keyboard } from "./keyboard";

export class Player extends Entity {
    constructor(conf) {
        super(conf);
        conf.sprite.ctx.canvas.id = 'player';
        console.log('Player:', 'constructor()');
        append(id('layer_street'), conf.sprite.ctx.canvas);
    }
    moveRight() {
        this.sprite.setAction('right');
        this.position.x += 1;
    }
    moveLeft() {
        this.sprite.setAction('left');
        this.position.x -= 1;
    }
    moveDown() {
        this.sprite.setAction('down');
        this.position.y += 1;
    }
    moveUp() {
        this.sprite.setAction('up');
        this.position.y -= 1;
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
        this.position.y = clamp(this.position.y, 0, 40);
        this.position.x = clamp(this.position.x, 20, 5000);
        let reset = 0;
        Object.keys(Keyboard.Keys).forEach(key => reset += Keyboard.Keys[key]);
        this.sprite.update(!reset);
        this.sprite.canvas.style.transform = `translate3d(30px,${this.position.y}px,${this.position.y}px)`;
    }
}
