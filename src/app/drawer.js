export function drawPolygon(ctx, fillStyle, strokeStyle, points, erase = false) {
    function getNextCord() {
        return points.shift();
    }
    if (erase)
        ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.moveTo(getNextCord(), getNextCord());
    while (points.length) {
        ctx.lineTo(getNextCord(), getNextCord());
    }
    ctx.closePath();
    if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }
    if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }
}
/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {[posX,posY,width,height]} points 
 */
export function drawRect(ctx, color, points) {
    ctx.fillStyle = color;
    ctx.fillRect(...points);
}
export function strokeRect(ctx, color, points) {
    ctx.strokeStyle = color;
    ctx.strokeRect(...points);
}
/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {[posX,posY,width,height]} points 
 */
export function clearRect(ctx, points) {
    ctx.clearRect(...points);
}
/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {[x,y,r,sAngle,eAngle,counterclockwise]} points 
 */
export function drawCircle(ctx, strokeStyle, fillStyle, points) {
    ctx.beginPath();
    ctx.arc(...points);

    if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }
    if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }
}