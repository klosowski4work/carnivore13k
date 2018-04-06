import { Animation, Frame } from './app/animation';
import { Keyboard } from "./app/keyboard";
export class Wolf {
    constructor(image, ctx) {
        this.image = new Image();
        this.image.src = image;
        this.ctx = ctx;
        this.animations = {};
        this.pos = { x: 0, y: 0 };
        this.initAnimations();
        this.direction = 'right';
        Keyboard.init();
        
    }
    initAnimations() {
        const options = {
            context: this.ctx,
            image: this.image,
            ticksPerFrame: 4,
        }
        const w = 75;
        const h = 44;

        this.animations.right = new Animation(options);
        for (let i = 0; i < 6; i++) {
            this.animations.right.addFrame(new Frame(i * w, 0, w, h))
        }
        this.animations.left = new Animation(options);
        for (let i = 0; i < 6; i++) {
            this.animations.left.addFrame(new Frame(i * w, 0, w, h))
        }
    }
    moveRight() {
        this.direction = 'right';
        this.pos.x += 2;
    }
    moveLeft() {
        this.direction = 'left';
        this.pos.x -= 2;
    }
    moveDown() {
        this.pos.y += 3;
    }
    moveUp() {
        this.pos.y -= 3;
    }
    render() {
        this.animations[this.direction].render(this.pos.x, this.pos.y, this.direction === 'left');
    }
    update() {
        if (Keyboard.Keys[Keyboard.Key.Right] > Keyboard.State.Up) {
            this.moveRight();
        }
        if (Keyboard.Keys[Keyboard.Key.Left] > Keyboard.State.Up) {
            this.moveLeft();
        }
        if (Keyboard.Keys[Keyboard.Key.Up] > Keyboard.State.Up) {
            this.moveUp();
        }
        if (Keyboard.Keys[Keyboard.Key.Down] > Keyboard.State.Up) {
            this.moveDown();
        }
        let reset = 0;
        Object.keys(Keyboard.Keys).forEach(key => reset += Keyboard.Keys[key]);
        this.animations[this.direction].update(!reset);
    }
}

export const wolfImage = new Image().src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAAsBAMAAABLZNsRAAAAElBMVEVQGAwxHhqJSzm1hXQ/IhvkybxWlIn6AAAABXRSTlP5Af38fRRSEEsAAA1ySURBVGje5VvBkuO4jkyBqrvQw73DgH1nE+adcmnu3dbw/39lD5KrbJfKdryImZjd52M1RYKJRAIk2OD/xl/8zz7DfyVYf4z/EaT/78CKr+AQ/3plqvfXwOpemav7d6L18xWwyviC9X+OL4H1EvDHfxqG12LnFbCmcNw/p+Aff02vgHV4xayXBk0vietLMPDvlxAtL6h3TJTpzyerxuo6xudgvf18wfw/f+6e7/KPFZ3Pgf3GqN1LYNkrg6rl57b/SHA9/PUkFN9hsv/9DKxIuX/unZr3k79A5alMI6vn48TMHGVbSuNzhv35igtPYvvpGWc8W3Gxx0ISTSynOT4B64dSrtMzsBRZD8cnpKiupnbce1Av08gcdSMy/ziO0+/IfPQHq0Y6/nwGA783Cbp/ErA/RFOZvc2PZotTVpuT+mOw4inBc3li1pBxcLGfj2MowpxayS0Bh3ZmHrS/aNenxO6zHN04qvuCZdxQvZhI989Sz0Ri55RPj00XUi3Fy7Efp+4BRw9lLvOng7bAmixr8bAfn1BZy+zzvMv+PZ3ju4RWvKVyBpTayJHyyBwnAKqXFU7wTPMczmQ+MzOf1n+pILVLVCTybHl7YzbxyMyRyKxlmx/THeoS5HD24t7KN/mTkMmal/kjrLENqbZZ22PKKGUrZ29+fmtfomeaPuO+ncOc5jm4CvYjg1QVAECTzT4y83vGYS6tUROgzSPzqRuZOVYA+z+aH0fmmFWLH+bj+DXpn6gvubi3BFI7lFLy92ea+K6mlmCzkQGznzdHnqCHhETzObd52SDuNzkd3wHSPLf5+A1F4zRNUwWpBjkUc+Dekz90bp5t4pOaqpSci7T01kqTMZIDqoK+AtTcRz5lLS0d/NAyQi6/mSl3zAwAE9fgs/vxJJrKPJfZfb6T5gqKb625u6gWDW7t3E9+3OBXae9lVjfAy2wzQAnk0n3VvqxZMqj4YQYtfL8G6+Re3NsZalncvJ2O44ZfzGcvTchcQMWoJaDdRMcEVGqzFwdMheYUMjnIbP7VRZCqCnqGkmf3ORE0BHI7uLYsdGSupvEkUPTMsObuM2Cis5ZZ3XLz8VoXMUZrramaZf0FMXf3Q2vH6Y7y/9Pa7NlUQfPsoZxhwUv7Nd5HtbtaFgqlZSoCFB9vwPqheW6eTXNWB8Tng/lXxtvB3XM2z5qpGB1KEtXy+9rRAMw1WxZVFzdXgQD9ibDoENCPlcxby+oKygKz5OltppbtyAOZKikw8oDSmpqqqgM2+yyAl/l6vZ7rW2stS1YTCtbMz0JJ3ma53UBr7ZxVsiCYz/Dz4debq9zE1/SXtzlbMBK4ewotg3L5fQPWqX9vrWUNmhPB3JMlP9+jJb22WVWyBoHPlvKvt5aEjh8iMQAgKq2YqrsieD4jq9AMLsdlc33kSGSltXNWM7Uz+SFnGGDevOdKShCMzKDSWpaQXU1Uz1LOCIKP5MCR0PEptNYUSAq4KwEI5G1Ot8a31poJAJBmMU9NgHAT1dFLay2LBgJysWROK9+vwJIdtdZm0aACa+apnBHuuDXQ8NbanEmyAuXs2eVwpiY08tCtQQGot9ayEOWEYDkHooxD6q8y/wBVay0rsqmQnzMUipCgpecBpIqJeSBrrZ0hQROoeMZ8PpwP+fBBmoEwcg2ttAxAQPPsb00ol1nQ39ZXpbVMAgDWXHNBgmXo/kbYQ2vNF0RbdvrkO64if6LWWhYQAWaag8/A4Taxoq+HxYciIM9EAgXMWx5/aM/MldCTemszCYIIQskIAADNV1aBRENroqBsAi9AFgfNKjIyA5hGZh7IrbQzYASYH3JwamLuc7okdO2Za/BLkg1mhcq5JML0Pt6l+VlBAIDsh0wZCnOT61NF7ZeIBoCQs2teNzj3t2CV1s5YVgwgn0VxuAnEAR2stbYsCDMEkgQFDqWPqmMkKCCayzKIADKTgP3IFelTQiKMMrWmAogAZkJABhAyxs+LqYEUpakABJgHtzOlZfUl7k8kPXO1DCALAAvwPKcG7PiP2wIZIYOyqoI0vSkpqQBL6r3ljCzMMjEABgKoXIE1YKKSXXRhaQBleWueDscbsCb43OZlEDSIEhSHX0Goi5RVE6GvJBJas7WcOpCTLPh8urCShDO1lrMAAgri66Sk144elITmhTSkhsU+RfSf/KObOCphZK6qiYQyAA0gLZIQjre1FjCEnF0yiVBKUCA5AFB3vcOBXAVZMxBUABLB4UwJ4zVYlVwAMQGglBQwpTP9dVPRVHK1rKrrqAQIyMSUucIFihGBUmgzSAUAUaK0X6S4+yjVQGIO1yNWSFMQEeYY67XtPJBmECEDgBogSoKSyZmj7ieF9sw8qBQXgQIIQigguPS3xOoHU2uKfgKQIRBgZI4Yr3c4qANElRREmQRQkMmdZkFdYZCFgimRZKCl/uqMRqhBBQgTLTopGvppApYzHZBVxggNZ/iOIy1ACFZVWFcbzBIUbqK6449BaUnhEbcZhVx7kmW5IAkSEkizdDyoWlIZmTlCwwwygDRIRoZKcO3Ha870Ayms6Y5BklX6+PXSrWLQrJrDyBWElKETABx0fw0WgdQ8Q4kIJCIgAHSp/3RkjoRK4pAwRgiBEkm/mErdWmFNHEnCLDQyR1mASLdZ6eQmyOqA5pHjSi2hZVTs78HyDpZIAKI1VAHRkRlitlbfJ4IL6QQIBSHRAMDXU3tcwWKQwvRnBImkfvvcWIMcimDHEQYRdMwcEaj/ACtyJECppEp5NV0oo4DaUqucJuaBwJCDZ+o4VoAWHjNHSkt01ZG5ktjib46rtqG7PaICZEkzZFxCCMtc+40bAsK5j9BdBbDUqXHkWCldyt+Lr8UypAIgBSZgmhDWiN4zM0M6jqIC7SoAlXH7RmIiRRHd8QACraMidPwA67SyxnyCdAAE6AdAz0Tnjpn5tGceFExETrZbTKULCldoRBDsw5Jh4cF4Ix7LtwnrV3GhFoCvh9EhiO8N0vEACPQCTl2KuvpBj6oQoMrK0G7BZ/k3jcwMGZkrjHwEbGstZuYqXSUJs+24gj5H1f6zKD2NTIhQlAkYI6AYl8sMTQt5qu6iSM81iFNeKWsXW+tnjClM7cZrkBupHYSZp5H6a70EEYYNag0EVweY+QbPOt7d6A8E6ceFoZeZhzUKdc8caRFzMp0IQL/dKBykH5ChygzRz1Hx82wYlaOCQUIh9RzpwoUa8nr/MqiSaMeV5LBKQf3qnkj5DPXbPwO4Tjin48b98gDqGXeXILInkCIv9SmgAI3f3ISMVTNHAP0n5JfLHNL9JIv7I5aEsiVYw8hcpWOQEBa+b3V3oo5RhAfKpLJ4+rJ5/YhaSyIjDySX4KuC8evFtUD299QGXR0EQsfMPNwOGhQdx1tGcsgu5Ot0kYA+Yrs7cJpNNPEA9Fy/XPNDVWX18Johtqb50TGfqONKyfaLgIxbYNH+JMIRZGlkHgD66JZ8RBpM+yXzrXNU4Os18oQvf62CenWHs3x9Ot4xCx3zTYnFkQCQXoIJAPOHYbe/IAQCoMw8bFhlCbqoXAJIumGrVXRSjlk7jiDf8QBMtNsEy1T3zAOyLPEfPiC6luqRmbHIOzNX+uKfYR/HL02aAfuB7pthp+5uP3tmxvF2Mp4q+rhfZ5GRuW4msbjeJFC/CRZX6HouGDR1Ff2gW+KuqtCRo0B7rtJxPW71DUEmHXNc62HpL5u7usNduVvD5XpkkA2wNrsWmGB3LdVhdzemY+ZBr6E4dcyx56irgo/MzLR1ZT7sETzJvi6lyJYFl8xLaYzQYUv7BrKswhwV1POA/m4qXF3YjR9iNQD0bRv8sxAY5Iubh+N2o2Qfw/hVTW+KL2FmpiuwPz5ZNrbuD1utgdPPIeslBuqW6bX7SBrMg03UbTmVSPoPaCE83IgoPqHvmfk9gfbMEfu6/x6sz4/ovgU0pM1KD/j5vn/cxl9cP/juSrIuu98t/lzGbTV2Q3cFPz3stHjPHGm/6dW4Kg0lMPOgP/kGBtxm2fc0VumZq0bz/TeN2s9MUqF3aA3bLe6JEj3pXi9xGOkzlQ0f5VLHzPWSFMNGAC2kuoD18G2IYeSIPG321IZ+OQIvlza0v0jAVissKjj2E3O0Fd1NsK54RDmNL7w04RqEnjXed3doDzeRgsvu6ldO3B4nT91Dn6j0HOnX4UFbNMgy1G+LGdw9mLjIOnWx326l/9DuuiuNu7Zn/dbG/ORBwApC3A7UQS/BNfgXMG47iafHDc9q2vGgYfeYfcxcacfXw7BlL3Okb7vMAdcSzEz5lRdRPD193lL1YcvdPqVMn1D0ycuxio7jAd2DJyHr1U49rnq5BdbQP7U83oAF5gEvPrWE9E8eCz0C80q1BzxB/RX3kT4A69J0HXy81oI7zZJPTL576nBTiI5fBOORWjxGNT7KYjc5PD5b6IX3XvWRMZfKN77dvGa7+yTsr94KbaM17Plv+tX0vaoNPr4+0fSC+x66+EKVSOOD5HX6aFYN9E1QR/u7Xt7Gw/eIDHnkf/B3Wk/deATW8HnO/u7dWAx59zeB9UDVhvCPgnUR4uERWDyNL0R7/3dR6/v4if+GB/v/V/7TQPw3vLr/XyBWVcsYrzADAAAAAElFTkSuQmCC"
