import { GAME_WIDTH, GAME_HEIGHT } from './globals';
import { Point } from "./point";


class CameraClass {

    constructor() {
        /** 
         * @type {Entity}
         * @private 
         */
        this._entity = null;
        this.pos = new Point(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        this.zoom = 800;
        this.instance = null;
    }

    update() {
        if (!this._entity) return;
        this.pos.x = this._entity.pos.x;
        this.pos.y = this._entity.pos.y;
    };
    follow(entity) {
        this._entity = entity;
    };
    static instance() {
        return this;
    }
};

export const Camera = new CameraClass();
