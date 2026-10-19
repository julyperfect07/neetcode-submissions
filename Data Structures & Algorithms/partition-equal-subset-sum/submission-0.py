class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        if sum(nums) % 2:
            return False
        target = sum(nums) // 2
        dp = set([0])
        for i in nums:
            next_dp = set()
            for t in dp:
                if t + i == target:
                    return True
                
                next_dp.add(t + i)
                next_dp.add(t)
            dp = next_dp
        return False