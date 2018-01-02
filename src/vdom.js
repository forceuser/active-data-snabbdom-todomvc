import {h, init as snabbdomInit} from "snabbdom";
import snabbdomClasses from "snabbdom/modules/class";
import snabbdomAttrs from "snabbdom/modules/attributes";
import snabbdomProps from "snabbdom/modules/props";
import snabbdomStyles from "snabbdom/modules/style";
import snabbdomEventListeners from "snabbdom/modules/eventlisteners";

const patch = snabbdomInit([
	snabbdomClasses,
	snabbdomAttrs,
	snabbdomProps,
	snabbdomStyles,
	snabbdomEventListeners,
]);

export {h, patch};
