
export class Entity {
  constructor(conf) {
    console.log('Entity:', 'constructor()');
    this._conf = conf;
    this.sprite = conf.sprite;
    this.position = conf.position || { x: 0, y: 0, z: 0 };
    this.width = conf.width;
    this.height = conf.height;
    this.rotation = 0;
    this.velocity = 1;
  }
  update() {
    const { x, y, z } = this.position;
    this.sprite.img.style.transform = `translate3d(${x}px,${y}px,${z}px)`;
    this.sprite.update();
    if (this._conf.onUpdate) this._conf.onUpdate();
  };
  render() {
    this.sprite.render();
    if (this._conf.onRender) this._conf.onRender();
  };
};



// /**
//  * @class Entity
//  * @param {EntityDef} def
//  * */
// function Entity(def) {
//   var self = this;

//   self.id = Entity.id++;

//   /** @private */
//   self._def = def;

//   self.position = def.position;
//   self.rotation = 0;

//   self.size = Point.from(window.LayersDef[def.gfx].size);
//   self.halfSize = self.size.mul(.5);

//   def.onInit && def.onInit(self);

//   /**
//    * @param {number} dt
//    * @return {void}
//    * */
//   self.Update = function (dt) {
//     def.onUpdate(self, dt);
//   };

//   /**
//    * @param {CanvasRenderingContext2D[]} ctxs
//    * @return {void}
//    * */
//   self.Render = function (ctxs) {
//     var ctx;
//     for (var layer = 0; layer < ctxs.length; layer++) {
//       ctx = ctxs[layer];

//       ctx.save();
//       ctx.translate(self.position.x + self.halfSize.x, self.position.y + self.halfSize.y);
//       ctx.rotate(self.rotation * DEG_TO_RAD);
//       ctx.translate(-self.halfSize.x, -self.halfSize.y);

//       def.onRender(self, ctx, layer);

//       ctx.restore();
//     }
//   };
// }

// /**
//  * @type {number}
//  * */
// Entity.id = 0;

// /**
//  * @static
//  * @param {string} type
//  * @param {EntityDefOptionals} [modifiers]
//  * @param {number} [priority]
//  * @return {Entity}
//  * */
// Entity.new = function (type, modifiers, priority) {
//   (modifiers = modifiers || {}).__proto__ = Entity.types[type];
//   return EntityManager.Add(new Entity(modifiers), priority);
// };

// /**
//  * @static
//  * @type {Object.<string, EntityDef>}
//  * @const
//  * */
// Entity.types = {
//   "human": {
//     gfx: "human",
//     position: Point.zero(),
//     onInit: function (entity) {
//       entity.speed = 150;
//       entity.left = Point.left();
//       entity.down = Point.down();
//       entity.dir = Point.zero();

//       entity.injured = 0;
//       entity.treasures = 0;

//       entity.noMovement = false;

//       entity.getBB = function () {
//         return {
//           x: entity.position.x + 16,
//           y: entity.position.y + 16,
//           w: TILE_SIZE - 16 * 2,
//           h: TILE_SIZE - 16 * 2
//         };
//       };
//     },
//     onUpdate: function (entity, dt) {
//       if (entity.noMovement) return;

//       var s = (entity.speed - entity.injured * 50) * dt, v, h;

//       v = h = 0;

//       var newPosV = Point.zero();
//       var newPosH = Point.zero();
//       var newPos = entity.position;

//       if (Keyboard.Keys[Keyboard.Key.Up] >= Keyboard.State.Pressed) {
//         newPosV = newPosV.sub(entity.down.mul(s));
//         if (!v) { v = 1; entity.dir.y = 0 }
//         entity.dir.y -= 1;
//       }
//       if (Keyboard.Keys[Keyboard.Key.Down] >= Keyboard.State.Pressed) {
//         newPosV = newPosV.add(entity.down.mul(s));
//         if (!v) { v = 1; entity.dir.y = 0 }
//         entity.dir.y += 1;
//       }
//       if (Keyboard.Keys[Keyboard.Key.Left] >= Keyboard.State.Pressed) {
//         newPosH = newPosH.sub(entity.left.mul(s));
//         if (!h) { h = 1; entity.dir.x = 0 }
//         entity.dir.x -= 1;
//       }
//       if (Keyboard.Keys[Keyboard.Key.Right] >= Keyboard.State.Pressed) {
//         newPosH = newPosH.add(entity.left.mul(s));
//         if (!h) {
//           h = 1;
//           entity.dir.x = 0
//         }
//         entity.dir.x += 1;
//       }

//       if (!Physics.CollidesWith(
//         "map",
//         newPosV.x + 16 + entity.position.x,
//         newPosV.y + 16 + entity.position.y,
//         TILE_SIZE - 16 * 2,
//         TILE_SIZE - 16 * 2
//       )) {
//         newPos = newPos.add(newPosV);
//       }

//       if (!Physics.CollidesWith(
//         "map",
//         newPosH.x + 16 + entity.position.x,
//         newPosH.y + 16 + entity.position.y,
//         TILE_SIZE - 16 * 2,
//         TILE_SIZE - 16 * 2s
//       )) {
//         newPos = newPos.add(newPosH);
//       }

//       entity.position = newPos;

//       if (v !== h) {
//         if (!v) entity.dir.y = 0;
//         if (!h) entity.dir.x = 0;
//       }

//       entity.rotation = entity.dir.angle() * RAD_TO_DEG + 90;
//     },
//     onRender: function (entity, ctx, layer) {
//       Layers[entity._def.gfx][layer] && ctx.drawImage(
//         Layers[entity._def.gfx][layer],
//         0, // TODO: modify this offset to support animations
//         0,
//         entity.size.x,
//         entity.size.y,
//         0,
//         0,
//         entity.size.x,
//         entity.size.y
//       );
//     }
//   },

// };