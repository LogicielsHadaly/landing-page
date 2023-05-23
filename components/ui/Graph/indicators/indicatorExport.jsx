import { price_transform } from "./price_transform";
import { statistics } from "./statistics";
import { volatility } from "./volatility";
import { volume } from "./volume";
import { momentum } from "./momentum";

const indicators = [
    ...price_transform,
    ...statistics,
    ...volatility,
    ...volume,
    ...momentum,
];

export default indicators;
