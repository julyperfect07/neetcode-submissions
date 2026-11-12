class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        map = {}
        freq = [[] for _ in range(len(nums) + 1)]

        res = []

        for num in nums:
            map[num] = map.get(num , 0) + 1

        for i , c in map.items():
            freq[c].append(i)
        
        for i in range(len(nums) , -1 , -1 ):
            for j in freq[i]:
                res.append(j)
            if len(res) == k:
                return res
        
        