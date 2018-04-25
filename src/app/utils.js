import { Point } from "./point";
import { TILE_SIZE } from "./globals";

/**
 * @function
 * @callback VoidCallback
 * @return {void}
 * */

/**
 * @param {number} value
 * @param {number} min
 * @return {number}
 * */
function clampLeft(value, min) {
  return value < min ? min : value;
}

/**
 * @param {number} value
 * @param {number} max
 * @return {number}
 * */
export function clampRight(value, max) {
  return value > max ? max : value;
}

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 * */
export function clamp(value, min, max) {
  return value < min ? min : (value > max ? max : value);
}

/**
 * @param {number} value
 * @return {number}
 * */
export function clamp01(value) {
  return clamp(value, 0, 1);
}

/**
 * 
 * @param {string} hex // hex value
 * @param {number} partSize //splite hex value to parts 
 * @return {number | number[]} //int presentation of hex value, 
 *                               or if partSize is defined then int presentation of hex values in table 
 */
export function hexInt(hex, partSize) {
  try {

    if (!!partSize) {
      const reg = new RegExp(`.{1,${partSize}}`, 'g');
      return hex.match(reg).map(e => parseInt(e, 16));
    }
    return parseInt(hex, 16);

  } catch (e) {
    console.log(e);
  }
}

/**
 * @param {string} v
 * @return {Element}
 * */
export function id(v) {
  return document.getElementById(v);
}

/**
 * @param {string} t
 * @return {Element}
 * */
export function get(t) {
  return document.createElement(t);
}

export function append(parent, ...childs) {
  childs.forEach((el) => parent.append(el));
  return childs[0];
}
/**
 * @param {number} v
 * @return {number}
 * */
export function sgn(v) {
  return v ? Math.abs(v) / v : 1;
}

var DEG_TO_RAD = Math.PI / 180;
var RAD_TO_DEG = 1 / DEG_TO_RAD;

/**
 * @param {Point} tile
 * @return {Point}
 * */
export function tileToWorldSpace(tile) {
  return tile.mul(TILE_SIZE);
}

/**
 * @param {Point} ws
 * @return {Point}
 * */
export function worldSpaceToTile(ws) {
  var t = ws.mul(1 / TILE_SIZE);
  return new Point(
    Math.floor(t.x),
    Math.floor(t.y)
  );
}

export function random(scope) {
  return Math.ceil(Math.random() * scope);
}
export function randomColor() {
  return [random(255), random(255), random(255)];
}
export function randomColorHexRGB(min = 0, max = 255) {
  return [...randomColor()].map(c => toHex(clamp(c, min, max), 2)).join('');
}
export function randomColorHexRGBA() {
  return [...randomColor(), 255].map(c => toHex(c, 2)).join('');
}

export function toHex(number, size = 2) {
  return ('0'.repeat(size) + number.toString(16)).slice(-size);
}

export function createCanvas(width, height, parent = document.body) {
  const canvas = get('canvas');
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  // canvas.style.width = width;
  canvas.height = height;
  // canvas.style.height = height;
  parent.appendChild(canvas);
  return {
    canvas,
    ctx,
    remove() {
      parent.removeChild(canvas);
    }
  }
}

export function lightenDarkenColor(color, amt) {
  let first = '';
  if (color[0] === '#') {
    color.slice(1);
    first = '#';
  }
  return first + color
    .match(/.{1,2}/g) //split to every color element
    .map((e, idx) => idx < 3
      ? toHex(clamp(hexInt(e) + amt, 0, 255)) //lightenDarken every color element
      : e //return not transformed value like alpha
    ).join('');
}

export function addAsset(idx, src, parent = 'assets') {
  const { canvas, ctx, remove } = createCanvas(id('assets'));
  const img = new Image();
  img.src = src;
  document.body.appendChild(img);
  setTimeout(() => {
    canvas.width = parseInt(img.naturalWidth);
    canvas.height = parseInt(img.naturalHeight);
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    canvas.id = idx;
    canvas.className = 'assetImg';
    document.body.removeChild(img);
  });

}

export function imgDataToHexArray(data) {
  return [...data].map(e => toHex(e)).join('').match(/.{1,8}/g);
}

export function chance(percent) {
  return random(100) <= percent;
}

function overlay(color1, color2) {
  const c1 = hexInt(color1, 2).map(e => e / 255);
  const c2 = hexInt(color2, 2).map(e => e / 255);
  return c1.map((_, id) => c1[id] < 0.3 ? 2.0 * c1[id] * c2[id] : (1.0 - 2.0 * (1.0 - c1[id]) * (1.0 - c2[id])))
    .map(e => toHex(Math.floor(255 * clamp(e, 0, 1)))).join('');
}

export function colorizeImage(ctx, sourceCanvas, color) {
  const { width, height } = sourceCanvas;
  const data = imgDataToHexArray(sourceCanvas.getContext('2d').getImageData(0, 0, width, height).data);
  for (let h = 0, cnt = 0; h < height; h++) {
    for (let w = 0; w < width; w++ , cnt++) {
      ctx.fillStyle = '#' + overlay(color, data[cnt].slice(0, 6)) + data[cnt].slice(-2);
      ctx.fillRect(w, h, 1, 1);
    }
  }
}
