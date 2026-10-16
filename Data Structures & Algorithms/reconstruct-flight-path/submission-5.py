class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        adj = defaultdict(list)

        for src , dist in sorted(tickets , reverse = True):
            adj[src].append(dist)
        res = []

        def dfs(src) :
            while adj[src] :
                dfs(adj[src].pop())
            res.append(src)
        
        dfs("JFK")
        return res[::-1]