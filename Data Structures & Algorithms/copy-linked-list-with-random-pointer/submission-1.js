// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const oldToCopy = new Map();
        oldToCopy.set(null, null);
        let cur = head
        while(cur) {
            oldToCopy.set(cur, new Node(cur.val));
            cur = cur.next
        }
        cur = head 
        while(cur) {
            const copy = oldToCopy.get(cur);
            copy.next = oldToCopy.get(cur.next);
            copy.random = oldToCopy.get(cur.random);
            cur = cur.next
        }

        return oldToCopy.get(head);

    }
}
