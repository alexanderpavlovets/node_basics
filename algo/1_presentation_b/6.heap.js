
// Heap

function Heap(data = []) {
	this.data = data;
	this.size = data.length;

	if (data.length > 1) {
		this.buildMaxHeap();
	}
}

Heap.prototype = {
	swap: function(i, j) {
		let temp = this.data[i];
		this.data[i] = this.data[j];
		this.data[j] = temp;
	},

	maxHeapify: function(i) {
		let leftIdx = 2*i + 1;
		let rightIdx = 2*i + 2;
		let largest = i;

		if ( leftIdx < this.size && this.data[leftIdx] > this.data[largest]) {
			largest = leftIdx;
		}

		if (rightIdx < this.size && this.data[rightIdx] > this.data[largest]) {
			largest = rightIdx;
		}

		if (largest !== i) {
			this.swap(largest, i);
			this.maxHeapify(largest);
		}
	},

	buildMaxHeap: function() {
		for(let i = Math.floor(this.size / 2); i >= 0; i--) {
			this.maxHeapify(i);
		}
	},

	bubbleUp: function() { 
		let curIdx = this.size - 1;	

		while(curIdx > 0) { // O(log(n)) as we deviding parent index by 2 every iteration
			let parentIdx = Math.floor((curIdx - 1)/ 2);
			let lastVal = this.data[curIdx];	
			let parentData = this.data[parentIdx];
			
			if (parentData >= lastVal) { return; }
			else {
				this.data[parentIdx] = lastVal;
				this.data[curIdx] = parentData;
				curIdx = parentIdx;
			}
		}
	},

	push: function(val) {
		this.data.push(val);
		this.size++;
		this.bubbleUp();
	},

	decrementSize: function() { this.size--; },

	print: function() { console.log(this.data) }
}



const heap = new Heap();

heap.push(20);
heap.push(10);
heap.push(30);
heap.push(1);
heap.push(100);

heap.print();

/*
Output: 
[ 100, 30, 20, 1, 10 ]

The tree looks like:

   100
   / \
  30 20
 / \
1  10

*/
