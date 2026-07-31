class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1
        let b = nums2
        let total = nums1.length + nums2.length
        let half = Math.floor(total / 2)
        if(a.length > b.length) {
            [a , b] = [b , a]
        }
        let l = 0 
        let r = a.length - 1
        while(true) {
            let i = Math.floor((l + r) / 2)
            let j = half - i - 2

            let aleft = i >= 0 ? a[i] : -Infinity
            let aright = i + 1 < a.length ? a[i + 1] : Infinity
            let bleft = j >= 0 ? b[j] : -Infinity
            let bright = j + 1 < b.length ? b[j+1] : Infinity
            if(bleft <= aright && aleft <= bright) {
                if(total % 2 !== 0) {
                    return Math.min(aright, bright)
                }else {
                    return (
    Math.max(aleft, bleft) +
    Math.min(aright, bright)
) / 2
                }
            }else if(aleft > bright) {
                r = i - 1
            }else {
                l = i + 1
            }
        }
    }
}
