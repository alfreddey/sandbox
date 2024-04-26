public class Node {
    Node next = null;
    int dataItem;

    Node(int data, Node nextNode) {
        this.dataItem = data;
        this.next = nextNode;
    }

    Node(int dataItem) {
        this.dataItem = dataItem;
        this.next = null;
    }

    public int getData() {
        return this.dataItem;
    }

    public Node getNextNode() {
        return this.next;
    }
}
