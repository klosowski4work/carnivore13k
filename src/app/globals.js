import { Point } from "./point";


/*export const GAME_WIDTH = 640;
export const GAME_HEIGHT = 360;*/

/*export const GAME_WIDTH = 1280;
export const GAME_HEIGHT = 720;*/
// export const GAME_WIDTH = innerWidth;
export const GAME_HEIGHT = 500; 
export const GAME_WIDTH = 500;

export const GAME_SIZE = new Point(GAME_WIDTH, GAME_HEIGHT);
export const ONE_OVER_GAME_SIZE = new Point(1 / GAME_WIDTH, 1 / GAME_HEIGHT);

export const GFX_SCALE = 4;
export const BASE_TILE_SIZE = 16;
export const TILE_SIZE = BASE_TILE_SIZE * GFX_SCALE;
export const HALF_TILE_SIZE = TILE_SIZE / 2;

export const LayersCount = 15;

export const DISTANCE_BETWEEN_LAYERS = 7.5;

export var PLAYER;