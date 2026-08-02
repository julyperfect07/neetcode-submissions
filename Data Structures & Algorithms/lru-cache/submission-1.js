class Node {
    constructor(key , val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
        this.cache = new Map()
        this.left = new Node(0 , 0)
        this.right = new Node(0 , 0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    remove(node){
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
    }

    insert(node) {
        let right = this.right
        let prev = this.right.prev
        prev.next = node
        right.prev = node
        node.prev = prev
        node.next = right
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)) {
            let node = this.cache.get(key)
            this.remove(node)
            this.insert(node)
            return node.val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key))
            this.cache.delete(key)

        }
        let newNode = new Node(key , value)
        this.insert(newNode)
        this.cache.set(key , newNode)

        if(this.cache.size > this.cap) {
            let lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}
