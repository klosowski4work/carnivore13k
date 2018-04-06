
import { id, get } from "./utils";
import { GAME_WIDTH, GAME_HEIGHT } from "./globals";
import { test as testPeople } from "../tests/people";
import { test as testMan } from "../tests/man";
import { addAssets } from "../gfx/assets";

export class Core {
    constructor() {
        this.canvases = {
            entities: { canvas: null, ctx: null },
            ui: { canvas: null, ctx: null }
        };
        addAssets()
            .then(() => {
                this.tests();
            });

    };

    init() {
        // this.initCanvases();
        // this.update();
        // this.render();
        // this.loop();

        // this.persone = new Persone(people.bases[3], this.ctx, 16, 16);
    };
    tests() {
        // testPeople();
        testMan();
    }
    initCanvases() {
        this.container = id("game");
        this.canvas = get('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.container.appendChild(this.canvas);
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

        this.update();
        this.render();
    };
    update() {
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


        // this.wolf.render();
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