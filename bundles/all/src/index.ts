import { type Engine } from "@tsparticles/engine";
import { initPjs } from "@tsparticles/pjs";
import { loadArrowShape } from "@tsparticles/shape-arrow";
import { loadBubbleEffect } from "@tsparticles/effect-bubble";
import { loadCanvasMaskPlugin } from "@tsparticles/plugin-canvas-mask";
import { loadCardsShape } from "@tsparticles/shape-cards";
import { loadCogShape } from "@tsparticles/shape-cog";
import { loadCurlNoisePath } from "@tsparticles/path-curl-noise";
import { loadCurvesPath } from "@tsparticles/path-curves";
import { loadEasingBackPlugin } from "@tsparticles/plugin-easing-back";
import { loadEasingCircPlugin } from "@tsparticles/plugin-easing-circ";
import { loadEasingCubicPlugin } from "@tsparticles/plugin-easing-cubic";
import { loadEasingExpoPlugin } from "@tsparticles/plugin-easing-expo";
import { loadEasingLinearPlugin } from "@tsparticles/plugin-easing-linear";
import { loadEasingQuartPlugin } from "@tsparticles/plugin-easing-quart";
import { loadEasingQuintPlugin } from "@tsparticles/plugin-easing-quint";
import { loadEasingSinePlugin } from "@tsparticles/plugin-easing-sine";
import { loadEmittersShapeCanvas } from "@tsparticles/plugin-emitters-shape-canvas";
import { loadEmittersShapePath } from "@tsparticles/plugin-emitters-shape-path";
import { loadEmittersShapePolygon } from "@tsparticles/plugin-emitters-shape-polygon";
import { loadExportImagePlugin } from "@tsparticles/plugin-export-image";
import { loadExportJSONPlugin } from "@tsparticles/plugin-export-json";
import { loadExportVideoPlugin } from "@tsparticles/plugin-export-video";
import { loadExternalParticleInteraction } from "@tsparticles/interaction-external-particle";
import { loadExternalPopInteraction } from "@tsparticles/interaction-external-pop";
import { loadFractalNoisePath } from "@tsparticles/path-fractal-noise";
import { loadFull } from "tsparticles";
import { loadGradientUpdater } from "@tsparticles/updater-gradient";
import { loadHeartShape } from "@tsparticles/shape-heart";
import { loadHsvColorPlugin } from "@tsparticles/plugin-hsv-color";
import { loadInfectionPlugin } from "@tsparticles/plugin-infection";
import { loadInfinityShape } from "@tsparticles/shape-infinity";
import { loadLightInteraction } from "@tsparticles/interaction-light";
import { loadMotionPlugin } from "@tsparticles/plugin-motion";
import { loadNamedColorPlugin } from "@tsparticles/plugin-named-color";
import { loadOklchColorPlugin } from "@tsparticles/plugin-oklch-color";
import { loadOrbitUpdater } from "@tsparticles/updater-orbit";
import { loadParticlesRepulseInteraction } from "@tsparticles/interaction-particles-repulse";
import { loadPathShape } from "@tsparticles/shape-path";
import { loadPerlinNoisePath } from "@tsparticles/path-perlin-noise";
import { loadPoissonDiscPlugin } from "@tsparticles/plugin-poisson-disc";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { loadPolygonPath } from "@tsparticles/path-polygon";
import { loadRoundedPolygonShape } from "@tsparticles/shape-rounded-polygon";
import { loadRoundedRectShape } from "@tsparticles/shape-rounded-rect";
import { loadSVGPath } from "@tsparticles/path-svg";
import { loadSimplexNoisePath } from "@tsparticles/path-simplex-noise";
import { loadSoundsPlugin } from "@tsparticles/plugin-sounds";
import { loadSpiralShape } from "@tsparticles/shape-spiral";
import { loadTrailEffect } from "@tsparticles/effect-trail";
import { loadZigZagPath } from "@tsparticles/path-zig-zag";

declare const __VERSION__: string;

/**
 * Loads the slime bundle with all plugins needed for running the tsParticles All package.
 * This function must be called to make tsParticles All work.
 * This function is not mandatory, the plugins can be loaded manually, or using other plugin bundles.
 * If this function is not called, the \@tsparticles/all package/dependency can be safely removed.
 * This function is called automatically using CDN bundle files.
 * @param engine - the engine to use for loading all plugins
 * @param refresh -
 */
export async function loadAll(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    initPjs(engine);

    await loadFull(engine, false);

    await loadHsvColorPlugin(engine, false);
    await loadNamedColorPlugin(engine, false);
    await loadOklchColorPlugin(engine, false);
    await loadEasingBackPlugin(engine, false);
    await loadEasingCircPlugin(engine, false);
    await loadEasingCubicPlugin(engine, false);
    await loadEasingExpoPlugin(engine, false);
    await loadEasingLinearPlugin(engine, false);
    await loadEasingQuartPlugin(engine, false);
    await loadEasingQuintPlugin(engine, false);
    await loadEasingSinePlugin(engine, false);

    await loadEmittersShapeCanvas(engine, false);
    await loadEmittersShapePath(engine, false);
    await loadEmittersShapePolygon(engine, false);

    await loadCanvasMaskPlugin(engine, false);
    await loadInfectionPlugin(engine, false);
    await loadMotionPlugin(engine, false);
    await loadPolygonMaskPlugin(engine, false);
    await loadSoundsPlugin(engine, false);
    await loadExportImagePlugin(engine, false);
    await loadExportJSONPlugin(engine, false);
    await loadExportVideoPlugin(engine, false);
    await loadExternalParticleInteraction(engine, false);
    await loadExternalPopInteraction(engine, false);
    await loadLightInteraction(engine, false);
    await loadParticlesRepulseInteraction(engine, false);
    await loadGradientUpdater(engine, false);
    await loadOrbitUpdater(engine, false);
    await loadCurvesPath(engine, false);
    await loadCurlNoisePath(engine, false);
    await loadFractalNoisePath(engine, false);
    await loadPerlinNoisePath(engine, false);
    await loadPoissonDiscPlugin(engine, false);
    await loadPolygonPath(engine, false);
    await loadSVGPath(engine, false);
    await loadZigZagPath(engine, false);
    await loadSimplexNoisePath(engine, false);
    await loadBubbleEffect(engine, false);
    await loadArrowShape(engine, false);
    await loadCardsShape(engine, false);
    await loadCogShape(engine, false);
    await loadHeartShape(engine, false);
    await loadInfinityShape(engine, false);
    await loadPathShape(engine, false);
    await loadRoundedPolygonShape(engine, false);
    await loadRoundedRectShape(engine, false);
    await loadSpiralShape(engine, false);
    await loadTrailEffect(engine, false);

    await engine.refresh(refresh);
}
