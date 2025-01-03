import { type Engine, assertValidVersion } from "@tsparticles/engine";
import { CircleDrawer } from "./CircleDrawer.js";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadCircleShape(engine: Engine, refresh = true): Promise<void> {
    assertValidVersion(engine, __VERSION__);

    await engine.addShape(new CircleDrawer(), refresh);
}
