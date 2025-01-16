import { CircleDrawer } from "./CircleDrawer.js";
import { type Engine } from "@tsparticles/engine";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadCircleShape(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    await engine.addShape(new CircleDrawer(), refresh);
}
