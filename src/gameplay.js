import { id, get, append } from "./utils";
import { GAME_WIDTH, GAME_HEIGHT } from "./globals";
// import { test as testPeople } from "../tests/people";
// import { test as testMan } from "../tests/man";
import { addAssets } from "../gfx/assets";
import { People } from "../gfx/people";
import { Hero } from "../hero";
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

export class Core {
    constructor() {
        this.init();
        this.entities = [];
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
    initPlayer() {
        new People().create()
            .then((sprite) => {
                this.player = new Player({
                    position: new Point(0, 0),
                    sprite,
                });
                Camera.follow(this.player);
            });
        // new Man().create()
        //     .then((idImg) => {
        //         this.player = new Hero(idImg, this.ctx);
        //         Camera.follow(this.player);
        //     });
    }
    initCity() {
        this.city = new City(15);
    }
    
    initCanvases() {
        this.container = id("game");
        this.canvas = get('canvas');
        this.canvas.style.transform = "translate3d(0,0,0)";
        this.ctx = this.canvas.getContext("2d");
        this.layerMiddle = id('layer_middle');
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
        this.player.update();
        Camera.update();
        this.layerMiddle.style.perspectiveOrigin = `${Camera.position.x + 230}px ${-Camera.position.y}px`;
        this.layerMiddle.style.transform = `translate3d(${-Camera.position.x}px,0px,-10px)`;
        this.entities.forEach((el) => el.update(dt));
    };
    render() {


        this.player.render();
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