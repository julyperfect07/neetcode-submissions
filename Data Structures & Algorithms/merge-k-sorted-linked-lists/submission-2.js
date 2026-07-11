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
        while(lists.length > 1) {
            let mergedLists = []
            for(let i = 0 ; i < lists.length ; i+=2) {
                let l1 = lists[i]
                let l2 = lists[i + 1]

                mergedLists.push(this.mergeTwoList(l1,l2))
            }

            lists = mergedLists
        }

        return lists[0]
    }

    mergeTwoList(list1 , list2) {
        let dummy = new ListNode()
        let tail = dummy
        while(list1 && list2) {
            if(list1.val > list2.val) {
                tail.next = list2
                list2 = list2.next
                
            }else {
                tail.next = list1
                list1 = list1.next
            }
                tail = tail.next
        }
            tail.next = list1 || list2

        return dummy.next
    }
}
