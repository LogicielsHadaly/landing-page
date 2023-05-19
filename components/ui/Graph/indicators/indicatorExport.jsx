import { price_transform } from "./price_transform";
import { statistics } from "./statistics";
import { volatility } from "./volatility";
import { volume } from "./volume";

const indicators = [
    ...price_transform,
    ...statistics,
    ...volatility,
    ...volume,
];

export default indicators;
