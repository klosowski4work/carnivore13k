import { random, tempCanvas, randomColorHexRGB, chance, id, get, colorizeImage, lightenDarkenColor, append } from "../app/utils";

export const COLORS = {
    skin: [
        'dc9108',
        'e8c7a1',
        'be8e66',
        '99633c',
        '4c3732',
    ],
    eyes: [
        '277bc4',
        '367865',
        '9f5924',
    ],
    hairs: {
        standard: [
            'd24122',
            '9b5324',
            '141414',
            'b4bac4',
        ],
        rogue: [
            '1c6f0b',
            '2093bf',
            'ca0c2a',
            '3f1695',
        ]
    }
}
let man_id = 0;
export class Man {
    constructor(name) {
        this.id = name || 'jan_' + man_id++;
        this.init();
    }

    init() {
        this.config = this.shuffle();
    }
    create() {
        const { canvas, ctx, remove } = tempCanvas();
        const { width, height } = id('base');
        canvas.width = width;
        canvas.height = height;

        const order = [
            'base',
            'eyes',
            'pants',
            'shirt',
            'vest',
            'bib',
            'hair01',
            'hair10',
            'hair02',
        ];
        return new Promise((resolve) => {
            order.forEach(key => {
                if (!!this.config[key]) {
                    const sourceCanvas = id(key);
                    colorizeImage(ctx, sourceCanvas, this.config[key]);
                }
            });
            const img = get('img');
            append(document.body, img).id = this.id;
            img.src = canvas.toDataURL('image/png');
            resolve(this.id);
            // remove();
        })


    }
    shuffle() {
        const config = {
            base: COLORS.skin[random(COLORS.skin.length - 1)],
            eyes: COLORS.eyes[random(COLORS.eyes.length - 1)],
            pants: randomColorHexRGB(64, 128),
            shirt: chance(80) ? randomColorHexRGB(64, 192) : null,
            vest: chance(10) ? randomColorHexRGB(32, 64) : null,
            bib: null,
            hair01: null,
            hair10: null,
            hair02: null,
        }
        config.bib = !config.shirt && !config.shirt && chance(30) ? randomColorHexRGB(64, 192) : null;
        const hairType = (chance(60) && 'standard') || (chance(30) && 'rogue') || null;
        const hairColor = hairType ? COLORS.hairs[hairType][random(COLORS.hairs[hairType].length - 1)] : null;
        config.hair01 = hairType == 'standard' ? chance(70) && hairColor || null : null;
        config.hair10 = hairType == 'standard' ? (config.hair01 ? chance(50) && hairColor : null) : null;
        config.hair02 = hairType == 'rogue' ? hairColor : null;
        return config;
    }
}


