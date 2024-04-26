class Queue {
    private int capacity = 0, size = 0, front = 0;
    private int rear;
    private int[] arr;

    public Queue(int capacity) {
        this.capacity = capacity;
        this.arr = new int[capacity];
    }

    private void setSize() {
        this.size += 1;
    }

    private void setRear() {
        this.rear = this.getSize();
    }
    private int getSize() {return size;}
    private int getRearIndex() {return rear;}

    public int getFirst() {return arr[front];}
    public int getAt(int index) {return arr[index];}

    public boolean isFull() { return (this.capacity == this.getSize()) ? true : false;}

    public Queue enqueue(int data) {
        if(isFull()) {
            System.out.println("Queue is full");
            return this;
        }
        else {
            int rearIndex = getRearIndex();
            arr[rearIndex] = data;
            this.setSize();
            this.setRear();
            System.out.println("Item is added to queue"+rearIndex);
            return this;
        }
    }
}