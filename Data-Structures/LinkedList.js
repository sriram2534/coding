function LinkedList() {
    this.head = null
    this.tail = null
    this.addToHead = function (value) {
        const newNode = new Node(value, this.head, null)
        if (this.head) this.head.prev = newNode
        else this.tail = newNode
        this.head = newNode
    }
    this.addToTail = function (value) {
        if (!this.head && !this.tail) {
            const node = new Node(value, null, null)
            this.head = node
            this.tail = node
            return node
        } else {
            const node = new Node(value, null, this.tail)
            this.tail['next'] = node
            this.tail = node
            return node
        }
    }
    this.removeHead = function () {
        if (!this.head) return null
        const prevHead = this.head.value
        const newHead = this.head.next
        newHead.prev = null
        this.head = newHead
        return prevHead
    }
}

function Node(value, next, prev) {
    this.value = value
    this.prev = prev
    this.next = next
}

const n1 = new LinkedList()
n1.addToHead(1)
n1.addToHead(2)
n1.addToHead(3)

// console.log(n1)
const head = n1.removeHead()
console.log('removed head', head)
console.log('================')
console.log(n1)
