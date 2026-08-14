class Solution {
    leastInterval(tasks, n) {
        const count = new Map();

        for (const task of tasks) {
            count.set(task, (count.get(task) || 0) + 1);
        }

        const maxHeap = new PriorityQueue((a, b) => b - a);

        for (const cnt of count.values()) {
            maxHeap.enqueue(cnt);
        }

        const q = []; // [count, availableTime]

        let time = 0;

        while (!maxHeap.isEmpty() || q.length > 0) {
            time++;

            if (maxHeap.isEmpty()) {
                time = q[0][1];
            } else {
                let cnt = maxHeap.dequeue();

                cnt--;

                if (cnt > 0) {
                    q.push([cnt, time + n]);
                }
            }

            if (q.length > 0 && q[0][1] === time) {
                maxHeap.enqueue(q.shift()[0]);
            }
        }

        return time;
    }
}