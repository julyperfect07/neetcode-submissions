class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Map();
        dp.set(s.length, 1);

        function dfs(i) {
            if (dp.has(i)) {
                return dp.get(i);
            }
            if (s.charAt(i) == "0") {
                return 0;
            }

            // الاحتمال الأول: فك تشفير رقم واحد فقط
            let res = dfs(i + 1);

            // الاحتمال الثاني: فك تشفير رقمين معاً (إذا كانا يقعان بين 10 و 26)
            if (i + 1 < s.length && (s.charAt(i) == "1" || (s.charAt(i) == "2" && s.charAt(i + 1) < "7"))) {
                res += dfs(i + 2); // تعديل: استخدام += بدلاً من =
            }

            dp.set(i, res); // تعديل: استخدام dp.set بدلاً من dp[i]
            return res;
        }

        return dfs(0);
    }
}