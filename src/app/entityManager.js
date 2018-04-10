import { id, get } from "https";

class EntutyManager {
    constructor() {
        entities = [];
        layersCtx = [];

        loop = (fn) => {
            Object.keys(entities).forEach((key) => {
                for (var i = 0; i < [key].length; i++) {
                    fn(entities[key][i]);
                }
            });
        }
    }

    add(entity, priority = 0) {
        entities[priority].push(entity);
        return entity;
    }
    remove(entity) {
        entities.splice(entity, 1);
    }
    update(dt) {
        loop((entity) => entity.update(dt));
    }
    render() {
        for (var i = 0; i < this.layersCtx.length; i++) {
            const { width, height } = layersCtx[i].canvas;
            this.layersCtx[i].clearRect(0, 0, width, height);
        }
    }
    init() {
        return new Promise((resolve) => {
            var layersHolder = id("map");
            for (var i = 0, canvas, ctx; i < LayersCount; i++) {
                layersCtx.push((ctx = (canvas = get("canvas")).getContext("2d")));
                canvas.style.transform = "translateZ(" + (i * DISTANCE_BETWEEN_LAYERS) + "px)";
                // canvas.width = Map.realWidth;
                // canvas.height = Map.realHeight;
                // layersHolder.appendChild(canvas);
            }
            resolve();
        });
    }
}