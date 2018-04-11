import { Entity } from "./entity";
import { random, id, get, append, clamp } from "./utils";

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
        this.bricks = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAMAAACLrFl+AAAAP1BMVEVcaHRPWVhodINzf5CJjqNxfY1AQzxOWFZeanZyfo4/QjpUYWhfbHJNV1V/hppUYmhFT0hocoBVYmlYYGVodIW6L+cIAAACp0lEQVQ4y21V25bCIAyEIpDU1qrr/3/rZiaB1j2bB9uUTMh1TDlvtd5cHvFW6yPU/97SF0QDon6sOgzPN4O0tt1uKd27yT3Jbo9dTN0TROE+3hY8zOeAHA5JeHSBKrAoapKSSFK9QH7gZ9GSZIHBx86pmgjd0KFfhVsJUdgoIdXvhzohIu98hTB93oqQdoVClT9ibkrvOfcI8eUQ9y04sJMaHiL4V1XmR19+fWvdy2GQN9J4VcaUZiQWMdKv041DPLD7SANQ2JmheiHcpLA4hJzp87j3A5kfgGxR7qiGyRXyXSf+qG5RX1wakJzfcWvkK16neSm6qCjbQZwhB4T9lRFDQAqzKgEZpxHYHfffUeRlVoNyzH4ePZpzQvBxd0i1+wZE5tSMfrKVEe02Cso6eWDTt0Gygw1SikPwxsqUsuUs8oH6pu9SMGgmb6b/XFeG0FpbV3PU87q2Rs3UDN/P+NLa03KmDsO+Qvp8IyYSeq5DAFEsrfrmxjZbGCaIU/klTh/4am8Oqd8QDmOfpDCoALMMCOq7R4/GxnNfe37x2DeAMkf8yGOKuPE+wRPCGVlwga9BurRojARxS9X1wiNb1Vi2I8JxyD7nApDyBfE5L97KGMY7ZuUcAUJIPeisj3gaIx4jH3OB0nKIEdhP5BvEIWPE41bxq6zZB4b4hfQH9cTaHaNeGMtyViym3SFBa76QTiYOIaMunoZGEHawntRDNzCUCGxCfA1iNWVST0Bohw45Hzqv5GPWfAlIci4/eXPjHwE3yaloltsga8tOZ6OoC1rJWs1mkYBYaQaWPfggfSGES/ofRP9A5GSd8DACSylNUkqXwPh3o4PlUHBZfOP/SgMkZMHafUIZi/z0xc7cXxLAVH3jsdpuB7owf9khOdMCVJJP9Xpgdr/tGCp+PWN8aQAAAABJRU5ErkJggg==')`;
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
        topSide.style.border = '5px solid lightgrey';
        topSide.style.backgroundColor = 'gray';
        topSide.style.backgroundSize = '15px';
    }

    update() {

    }
}