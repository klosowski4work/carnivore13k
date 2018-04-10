import { Entity } from "./entity";
import { random, id, get, append, clamp } from "./utils";
import { randomFill } from "crypto";

const assetsTypes = [
    'apartment01',
    'apartment02',
    'apartment03',
    'apartment04',
    'club01',
    'park01',
    'policestation01',
    'restaurant01',
    'verticalroad01',
    'verticalroad01b',
]

export class City extends Entity {
    constructor(pieces = 0) {
        super();

        this.parent = id('layer_middle');
        this.srcPref = './assets/city/';
        // this.createBuilding();
        this.bricks = `url('data:image/jpeg;base64,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')`;
        this.createCity(pieces)

    }
    createCity(pieces) {
        for (let i = 0; i < pieces; i++) {
            // const img = get('img');
            // img.src = this.srcPref + assetsTypes[random(assetsTypes.length - 1)] + '.png';
            // append(this.parent, img);
            this.createBuilding();
        }
    }

    createBuilding() {

        const width = clamp(random(250), 150, 250);
        const height = clamp(random(350), 200, 350);
        const depth = clamp(random(300), 150, 300);
        const building = get('div');
        const leftSide = get('div');
        const rightSide = get('div');
        const frontSide = get('div');
        const topSide = get('div');
        append(this.parent, building);
        building.className = 'building';
        building.style.width = width + 'px';
        leftSide.style.height = height + 'px';
        append(building, leftSide, rightSide, frontSide, topSide);

        frontSide.className = 'side front';
        frontSide.style.width = width + 'px';
        frontSide.style.height = height + 'px';
        frontSide.style.backgroundImage = this.bricks;
        frontSide.style.backgroundSize = '15px';

        leftSide.className = 'side left';
        leftSide.style.width = depth + 'px';
        leftSide.style.height = height + 'px';
        leftSide.style.backgroundImage = this.bricks;
        leftSide.style.backgroundSize = '15px';

        rightSide.className = 'side right';
        rightSide.style.width = depth + 'px';
        rightSide.style.height = height + 'px';
        rightSide.style.backgroundImage = this.bricks;
        rightSide.style.backgroundSize = '15px';

        topSide.className = 'side top';
        topSide.style.width = width + 'px';
        topSide.style.height = depth + 'px';
        topSide.style.backgroundImage = this.bricks;
        topSide.style.backgroundSize = '15px';
    }

    update() {

    }
}