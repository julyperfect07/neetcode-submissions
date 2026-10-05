class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        fresh = 0 
        time = 0
        q = deque()
        

        def rotOrange(r , c) :
            nonlocal fresh
            if(r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != 1 ):
                return
            q.append([r,c])
            fresh-=1
            grid[r][c] = 2

        for r in range(rows):
            for c in range(cols):
                if(grid[r][c] == 1):
                    fresh += 1
                if(grid[r][c] == 2):
                    q.append([r,c])
                    
        
        while(q and fresh > 0):
            for i in range(len(q)):
                r,c = q.popleft()
                rotOrange(r + 1 , c)
                rotOrange(r - 1, c)
                rotOrange(r , c + 1)
                rotOrange(r , c - 1)
            time+=1
        return time if fresh == 0 else -1
        