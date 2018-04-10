import { Point } from './point';
import { random } from './utils';

export class Entity {
    constructor() {
        if (this.target === Entity) {
            throw new TypeError("Cannot construct Entity instances directly");
        }
        this.pos = new Point(30, 30);
        this.dir = Point.right();
    };

    setPos(pos) {
        this.pos = pos;
    }
    setAngle(angle) {

    }
    update(entity, dt) {
        throw new TypeError("Must override method");
    }
    render() {
        throw new TypeError("Must override method");
    }
    static create(type) {
        switch (type) {
            case 'player':
                return new Player();
            case 'human':
                const human = new Human();
                human.setPos(100, random(200));
                return human;
            default:
                return;
        }
    }
}