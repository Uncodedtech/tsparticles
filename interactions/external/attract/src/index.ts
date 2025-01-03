import { type Engine, assertValidVersion } from "@tsparticles/engine";
import { Attractor } from "./Attractor.js";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadExternalAttractInteraction(engine: Engine, refresh = true): Promise<void> {
    assertValidVersion(engine, __VERSION__);

    await engine.addInteractor(
        "externalAttract",
        container => {
            return Promise.resolve(new Attractor(engine, container));
        },
        refresh,
    );
}

export * from "./Options/Classes/Attract.js";
export * from "./Options/Interfaces/IAttract.js";
