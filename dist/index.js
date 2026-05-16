"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rodCutting = (price, n) => {
    const dp = new Array(n + 1).fill(0);
    for (let length = 1; length <= n; length++) {
        let maxProfit = 0;
        for (let cut = 1; cut <= length; cut++) {
            const currentProfit = (price[cut] ?? 0) + (dp[length - cut] ?? 0);
            maxProfit = Math.max(maxProfit, currentProfit);
        }
        dp[length] = maxProfit;
    }
    return dp[n];
};
const price = [0, 1, 5, 8, 9];
const n = 4;
const result = rodCutting(price, n);
console.log(result);
