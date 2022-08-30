"use strict";
class Ride {
    start() { Ride._activeRide++; }
    stop() { Ride._activeRide--; }
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
let ride = new Ride;
ride.start();
let ride1 = new Ride;
ride1.start();
console.log(Ride.activeRide);
//# sourceMappingURL=index.js.map