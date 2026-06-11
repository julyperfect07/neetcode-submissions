/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || !lists.length) {
            return null
        }
        while (lists.length > 1){
            let mergedLists = []
            for(let i = 0 ; i < lists.length ; i += 2){
                let list1 = lists[i]
                let list2 = lists[i+1] || null;
                mergedLists.push(this.mergeList(list1, list2))
            }
            lists = mergedLists
        }
        return lists[0]
        
    }

    mergeList(l1 , l2) {
        let dummy = new ListNode(0 , null)
        let tail = dummy
        while (l1 && l2 ){
            if(l1.val < l2.val){
                tail.next = l1
                l1 = l1.next
            }else{
                tail.next = l2
                l2 = l2.next
            }
            tail = tail.next
        }
        tail.next = l1 || l2 
        return dummy.next
    }
}
