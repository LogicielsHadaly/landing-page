import { price_transform } from "./price_transform";
import { statistics } from "./statistics";
import { volatility } from "./volatility";
import { volume } from "./volume";
import { momentum } from "./momentum";
import { overlaps } from "./overlapstudies";

const indicators = [
    ...price_transform,
    ...statistics,
    ...volatility,
    ...volume,
    ...momentum,
    ...overlaps,
];

export default indicators;
