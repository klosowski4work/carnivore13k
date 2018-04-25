import { random, id, get, append, clamp } from "./utils";
import { style } from "./style";

style(`
.bricks { 
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAMAAACLrFl+AAAAP1BMVEVcaHRPWVhodINzf5CJjqNxfY1AQzxOWFZeanZyfo4/QjpUYWhfbHJNV1V/hppUYmhFT0hocoBVYmlYYGVodIW6L+cIAAACp0lEQVQ4y21V25bCIAyEIpDU1qrr/3/rZiaB1j2bB9uUTMh1TDlvtd5cHvFW6yPU/97SF0QDon6sOgzPN4O0tt1uKd27yT3Jbo9dTN0TROE+3hY8zOeAHA5JeHSBKrAoapKSSFK9QH7gZ9GSZIHBx86pmgjd0KFfhVsJUdgoIdXvhzohIu98hTB93oqQdoVClT9ibkrvOfcI8eUQ9y04sJMaHiL4V1XmR19+fWvdy2GQN9J4VcaUZiQWMdKv041DPLD7SANQ2JmheiHcpLA4hJzp87j3A5kfgGxR7qiGyRXyXSf+qG5RX1wakJzfcWvkK16neSm6qCjbQZwhB4T9lRFDQAqzKgEZpxHYHfffUeRlVoNyzH4ePZpzQvBxd0i1+wZE5tSMfrKVEe02Cso6eWDTt0Gygw1SikPwxsqUsuUs8oH6pu9SMGgmb6b/XFeG0FpbV3PU87q2Rs3UDN/P+NLa03KmDsO+Qvp8IyYSeq5DAFEsrfrmxjZbGCaIU/klTh/4am8Oqd8QDmOfpDCoALMMCOq7R4/GxnNfe37x2DeAMkf8yGOKuPE+wRPCGVlwga9BurRojARxS9X1wiNb1Vi2I8JxyD7nApDyBfE5L97KGMY7ZuUcAUJIPeisj3gaIx4jH3OB0nKIEdhP5BvEIWPE41bxq6zZB4b4hfQH9cTaHaNeGMtyViym3SFBa76QTiYOIaMunoZGEHawntRDNzCUCGxCfA1iNWVST0Bohw45Hzqv5GPWfAlIci4/eXPjHwE3yaloltsga8tOZ6OoC1rJWs1mkYBYaQaWPfggfSGES/ofRP9A5GSd8DACSylNUkqXwPh3o4PlUHBZfOP/SgMkZMHafUIZi/z0xc7cXxLAVH3jsdpuB7owf9khOdMCVJJP9Xpgdr/tGCp+PWN8aQAAAABJRU5ErkJggg==');
    background-size: 15px;
}`);
export class City {
    constructor(pieces = 0) {
        this.parent = id('layer_middle');
        this.createCity(pieces)
    }
    createCity(pieces) {
        for (let i = 0; i < pieces; i++) {
            this.createBuilding();
        }
    }
    createBuilding() {
        const width = clamp(Math.ceil(random(3)) * 50, 150, 250);
        const height = clamp(Math.ceil(random(7)) * 50, 150, 350);
        const depth = clamp(Math.ceil(random(6)) * 50, 150, 300);
        let builds = new Array(5);
        builds = builds.fill(1).map(() => get('div'));
        const sideStyles = ['', 'front', 'left', 'right', 'top'];
        builds.forEach((b, idx) => {
            b.className = !idx ? 'building' : 'bricks side ' + sideStyles[idx];
            b.style.width = ((idx < 2 || idx > 3) && width || depth) + 'px';
            b.style.height = ((idx < 4 && height) || depth) + 'px';
        });
        append(this.parent, builds[0]);
        append(builds[0], ...builds.slice(1));
    }
}