
import { id, get, append } from "./utils";
import { GAME_WIDTH, GAME_HEIGHT } from "./globals";
import { test as testPeople } from "../tests/people";
import { test as testMan } from "../tests/man";
import { addAssets } from "../gfx/assets";
import { Man } from "../gfx/man";
import { Hero } from "../hero";
import { Camera } from "./camera";
import { City } from "./city";

export class Core {
    constructor() {
        // this.canvases = {
        //     entities: { canvas: null, ctx: null },
        //     ui: { canvas: null, ctx: null }
        // };
        this.init();
    };

    init() {
        this.initCanvases();

        addAssets()
            .then(() => {
                this.initPlayer();
                this.initCity();
                this.loop();

                // this.tests();
            });

        // this.persone = new Persone(people.bases[3], this.ctx, 16, 16);
    };
    tests() {
        testPeople();
        testMan();
    }
    initPlayer() {
        new Man().create()
            .then((idImg) => {
                this.player = new Hero(idImg, this.ctx);
                Camera.follow(this.player);
            });
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
        // Object.keys(this.canvases).forEach(canvasId => {
        //     var canvas = get("canvas");
        //     canvas.id = canvasId;
        //     canvas.webkitImageSmoothingEnabled = false;
        //     canvas.mozImageSmoothingEnabled = false;
        //     canvas.imageSmoothingEnabled = false;
        //     this.container.appendChild(canvas);
        //     this.canvases[canvasId].ctx = (this.canvases[canvasId].canvas = canvas).getContext("2d");
        // });

        var resizeFn = () => {
            // Object.keys(this.canvases).forEach((canvas) => {
            //     this.canvases[canvas].canvas.width = GAME_WIDTH;
            //     this.canvases[canvas].canvas.height = GAME_HEIGHT;
            // });
            this.canvas.width = GAME_WIDTH;
            this.canvas.height = GAME_HEIGHT;
            this.canvas.webkitImageSmoothingEnabled = false;
            this.canvas.mozImageSmoothingEnabled = false;
            this.canvas.imageSmoothingEnabled = false;
            // this.container.style.width = GAME_WIDTH + "px";
            // this.container.style.height = GAME_HEIGHT + "px";
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
            this.update();
            this.render();
        } catch (e) {
            console.log(e, 'warning')
        }
    };
    update() {
        this.player.update();
        Camera.update();
        this.layerMiddle.style.perspectiveOrigin = `${Camera.pos.x + 230}px ${-Camera.pos.y}px`;
        this.layerMiddle.style.transform = `translate3d(${-Camera.pos.x}px,0px,-10px)`;
        // this.layerMiddle.style.perspectiveOrigin = `50% 50%`;
        // this.wolf.update();
        // EntityManager.Update(dt);
        // camera.update();
        // Map.update(dt);
    };
    render() {
        // Object.keys(self.canvases).forEach((canvasId) => {
        //     self.canvases[canvasId].ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        // });
        // EntityManager.Render();
        // this.grassOffset++;
        // for (let i = 0; i < Math.ceil(this.ctx.canvas.offsetWidth) + 24; i += 12) {
        //     for (let j = 0; j < Math.ceil(this.ctx.canvas.offsetHeight) + 24; j += 12) {
        //         this.ctx.drawImage(this.grass, i - 1.5 * this.grassOffset % 12, j);
        //     }
        // }


        this.player.render();
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