class Solution {
    /**
     * @param {number[]} nums1 - First sorted array
     * @param {number[]} nums2 - Second sorted array
     * @return {number} - The median of the two sorted arrays
     */
    findMedianSortedArrays(nums1, nums2) {
        // Ensure A is the smaller array to minimize binary search time
        let A = nums1;
        let B = nums2;
        let total = A.length + B.length;
        let half = Math.floor(total / 2);

        if (B.length < A.length) {
            [A, B] = [B, A]; // Swap if A is longer
        }

        let l = 0;
        let r = A.length - 1;

        // Binary search on the smaller array
        while (true) {
            // i is the partition index in A
            let i = Math.floor((l + r) / 2);
            // j is the corresponding partition index in B
            let j = half - i - 2;

            // Get elements around the partition
            // Use -Infinity and +Infinity as virtual boundaries
            let ALeft = i >= 0 ? A[i] : -Infinity;
            let Aright = (i + 1 < A.length) ? A[i + 1] : Infinity;
            let Bleft = j >= 0 ? B[j] : -Infinity;
            let Bright = (j + 1 < B.length) ? B[j + 1] : Infinity;

            // Correct partition found
            if (ALeft <= Bright && Bleft <= Aright) {
                // If total length is odd, return the middle element
                if (total % 2 !== 0) {
                    return Math.min(Aright, Bright);
                } else {
                    // If even, return the average of the two middle elements
                    return (Math.max(ALeft, Bleft) + Math.min(Aright, Bright)) / 2;
                }
            }
            // ALeft is too big → move left
            else if (ALeft > Bright) {
                r = i - 1;
            }
            // ALeft is too small → move right
            else {
                l = i + 1;
            }
        }
    }
}
