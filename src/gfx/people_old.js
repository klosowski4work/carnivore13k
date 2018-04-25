import { id, get, toHex, createCanvas, random, randomColorHexRGBA, lightenDarkenColor } from "../app/utils";

export class People {
    constructor() {
        this.bases = [];
        this.colors = {
            clothes: ['00e756ff', '008751ff'],
            skin: ['ffccaaff', 'ff77a8ff'],
        }
        this.init();
    }
    init() {
        const { canvas, ctx, remove } = createCanvas();
        const img = id('people');
        // img.style.display = 'none';
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const wh = 16;
        const peopleCnt = 8;
        for (let i = 0; i < peopleCnt; i++) {
            const data = [...ctx.getImageData(i * wh, 0, wh, wh).data];
            this.bases.push(data.map(color => toHex(color, 2)));
        }
        remove();
    }
    replaceColor(color, colors) {
        const { clotheColor, skinColors } = colors;
        switch (color) {
            case this.colors.clothes[0]:
                return clotheColor;
            case this.colors.clothes[1]:
                return lightenDarkenColor(clotheColor, -80);
            case this.colors.skin[0]:
                return skinColors;
            case this.colors.skin[1]:
                return lightenDarkenColor(skinColors, -80);
            default:
                return color;
        }
    }
    createPeoples(number) {
        const { ctx, canvas } = createCanvas();

        canvas.webkitImageSmoothingEnabled = false;
        canvas.mozImageSmoothingEnabled = false;
        canvas.imageSmoothingEnabled = false;
        const cols = Math.ceil(Math.sqrt(number));
        const rows = cols;        
        canvas.width = rows * 16;
        canvas.height = rows * 16;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                this.drawRandomPeople(ctx, r * 16, c * 16);
            }
        }a
    }
    drawPeople(ctx, type, x, y) {
        const clotheColor = randomColorHexRGBA();
        const skinColors = lightenDarkenColor(this.colors.skin[0], random(64) - 48);
        const data = this.bases[random(7)].join('').match(/.{1,8}/g).map((e) => this.replaceColor.call(this, e, { clotheColor, skinColors }));
        for (let h = y, cnt = 0; h < y + 16; h++) {
            for (let w = x; w < x + 16; w++ , cnt++) {
                ctx.fillStyle = '#' + data[cnt];
                ctx.fillRect(w, h, 1, 1);
            }
        }
    }
    drawRandomPeople(ctx, x, y) {
        this.drawPeople(ctx, random(7), x, y);  
    }
}
