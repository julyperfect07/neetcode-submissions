class Node {
    constructor(key , val){
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity
        this.cache = new Map()
        this.left = new Node(0, 0)  // LRU
        this.right = new Node(0, 0) // MRU
        this.left.next = this.right
        this.right.prev = this.left
    }

    remove(node){
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
    }

    insert(node){
        let prev = this.right.prev
        prev.next = node
        node.prev = prev
        node.next = this.right
        this.right.prev = node
    }

    get(key) {
        if(this.cache.has(key)){
            const node = this.cache.get(key)
            this.remove(node)
            this.insert(node)
            return node.val
        }
        return -1
    }

    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
            this.cache.delete(key)
        }
        const newNode = new Node(key, value)
        this.insert(newNode)
        this.cache.set(key, newNode)

        if(this.cache.size > this.cap){
            let lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}
