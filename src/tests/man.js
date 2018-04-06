import { Man, COLORS } from "../gfx/man";


export function test() {
    let cnt = 256;
    function createMan() {
        setTimeout(() => {
            if (cnt--) new Man().create().then(() => createMan());
        })
    }
    createMan();

}