import { GAME_WIDTH, GAME_HEIGHT } from './globals';
import { Point } from "./point";


class CameraClass {

    constructor() {
        /** 
         * @type {Entity}
         * @private 
         */
        this._entity = null;
        this.position = new Point(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        this.zoom = 800;
        this.instance = null;
    }

    update(offsetX = 0, offsetY = 0) {
        if (!this._entity) return;
        this.position.x = this._entity.position.x + offsetX;
        this.position.y = this._entity.position.y + offsetY;
    };
    follow(entity) {
        this._entity = entity;
    };
    static instance() {
        return this;
    }
};

export const Camera = new CameraClass();
