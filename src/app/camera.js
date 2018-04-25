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

    update() {
        if (!this._entity) return;
        this.position.x = this._entity.position.x;
        this.position.y = this._entity.position.y;
    };
    follow(entity) {
        this._entity = entity;
    };
    static instance() {
        return this;
    }
};

export const Camera = new CameraClass();
