import {
    createCanvas,
    id
} from "../app/utils";
import {
    drawPolygon,
    erasePolygon,
    clearRect,
    drawRect,
    strokeRect,
    drawCircle
} from "../app/drawer";

export function create() {
    const {
        canvas,
        ctx,
        remove
    } = createCanvas(100, 45, id('layer_middle'));
    canvas.style.position = 'absolute';
    canvas.style.display = 'block';
    var gradient = ctx.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, "#000");
    gradient.addColorStop(1, "#f00");
    drawPolygon(ctx, gradient, 'gray', [
        1, 0,
        70, 0,
        80, 17,
        90, 20,
        90, 38,
        1, 38,
        1, 38,
    ]);
    clearRect(ctx, [10, 4, 40, 15]);
    strokeRect(ctx, 'black', [10, 4, 40, 15]);
    drawRect(ctx, 'brown', [4, 20, 70, 2]);
    ctx.lineWidth = 4;
    drawCircle(ctx, 'black', 'gray', [20, 37, 5, 0, Math.PI * 2]);
    drawCircle(ctx, 'black', 'gray', [70, 37, 5, 0, Math.PI * 2]);
    return {
        canvas,
        ctx
    }
}