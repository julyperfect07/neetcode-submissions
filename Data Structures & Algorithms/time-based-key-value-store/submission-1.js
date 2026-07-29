class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.keyStore.get(key);

        if (!values) return "";

        let res = "";
        let l = 0;
        let r = values.length - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (values[m][1] <= timestamp) {
                res = values[m][0];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}