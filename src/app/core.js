import { id, get, append, random } from "./utils";
import { GAME_WIDTH, GAME_HEIGHT, HALF_TILE_SIZE } from "./globals";
// import { test as testPeople } from "../tests/people";
// import { test as testMan } from "../tests/man";
import { addAssets } from "../gfx/assets";
import { People } from "../gfx/people";
import { Camera } from "./camera";
import { City } from "./city";
// import {
//     Entity
// } from "./entity";
import { Player } from "./player";
import { create as createTruck } from '../gfx/truck';
import { Point } from "./point";
import { Sprite } from "./sprite";
import { Keyboard } from "./keyboard";
import { Enemy } from "./enemy";
import { Entity } from "./entity";

export class Core {
    constructor() {
        this.init();
        this.entities = [];
        this.counter = 100;
    };

    init() {
        this.initCanvases();
        Keyboard.init();
        addAssets()
            .then(() => {
                this.initPlayer();
                this.initCity();
                // this.initTruck();
                this.loop();
            });


    };
    gameOver() {
        this.loop = () => { };
        id('game-over').style.display = 'block';
        id('game-over').innerHTML = 'GAME OVER<br>Your scores: ' + (this.player.position.x - 50);
    }
    initPlayer() {
        new People().create()
            .then((sprite) => {
                this.player = new Player({
                    position: new Point(50, 0),
                    sprite,
                });
                Camera.follow(this.player);
                this.entities.push(this.player);
                this.initEnemy();
            });
    }
    initCity() {
        this.city = new City(25);
    }

    initEnemy() {
        this.enemy = new Enemy({
            posision: new Point(10, 10),
            player: this.player,
        });
        this.entities.push(this.enemy);
        this.enemy.setParent(this.layerStreet);
    }

    initCanvases() {
        this.streetLength = 50000;
        this.container = id("game");
        this.canvas = get('canvas');
        this.canvas.style.transform = "translate3d(0,0,0)";
        this.ctx = this.canvas.getContext("2d");
        this.layerMiddle = id('layer_middle');
        this.layerStreet = id('layer_street');
        this.layerStreet.style.width = this.streetLength + 'px';
        append(this.container, this.canvas);

        var resizeFn = () => {
            this.canvas.width = GAME_WIDTH;
            this.canvas.height = GAME_HEIGHT;
            this.canvas.webkitImageSmoothingEnabled = false;
            this.canvas.mozImageSmoothingEnabled = false;
            this.canvas.imageSmoothingEnabled = false;
        };

        resizeFn();
        window.addEventListener("resize", resizeFn);
    };

    loop() {
        window.requestAnimFrame(() => this.loop());
        if (this.player.health <= 0) {
            this.gameOver();
        }
        var ts = Date.now();
        if (!this.lsts) this.lsts = ts;
        var dt = (ts - this.lsts) / 1000;
        var t = (ts - this.lsts) / 1000;
        this.lsts = ts;

        this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        try {
            this.update(dt);
            this.render();
        } catch (e) {
            console.log(e, 'warning')
        }
    };
    update(dt) {
        Camera.update(-50);
        this.layerMiddle.style.perspectiveOrigin = `${Camera.position.x + 230}px ${-Camera.position.y*0.1}px`;
        this.layerMiddle.style.transform = `translate3d(${-Camera.position.x}px,0,-10px)`;
        this.layerStreet.style.transform = `translate3d(${-Camera.position.x}px,0,0)`;
        this.entities.forEach((el) => el.update(dt));
        this.enemy.position.x = Camera.position.x + 400;

    };
    render() {


        this.entities.forEach((el) => el.render());

    };


};

window.addEventListener("load", () => {
    new Core();
});

window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();