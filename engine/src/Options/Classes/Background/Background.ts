import type { IBackground } from "../../Interfaces/Background/IBackground.js";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader.js";
import { OptionsColor } from "../OptionsColor.js";
import type { RecursivePartial } from "../../../Types/RecursivePartial.js";
import { isNull } from "../../../Utils/TypeUtils.js";

/**
 * [[include:Options/Background.md]]
 */
export class Background implements IBackground, IOptionLoader<IBackground> {
    color;
    image;
    opacity;
    position;
    repeat;
    size;

    constructor() {
        this.color = new OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }

    load(data?: RecursivePartial<IBackground>): void {
        if (isNull(data)) {
            return;
        }

        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }

        if (data.image !== undefined) {
            this.image = data.image;
        }

        if (data.position !== undefined) {
            this.position = data.position;
        }

        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }

        if (data.size !== undefined) {
            this.size = data.size;
        }

        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
