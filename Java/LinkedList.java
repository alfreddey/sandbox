public class LinkedList {
    // Singly LinkedList
    int size = 0;
    Node head = null;

    LinkedList(Node node) {
        this.head = node;
        this.size += 1;
    }

    public String toString() {
        Node iterator = this.head;
        String str = "";

        while (iterator != null) {
            str += iterator.dataItem;
            iterator = iterator.next;
        }

        return str;
    }

    public Node createNode(int dataItem) {
        return new Node(dataItem);
    }

    public void append(Node node) {
        Node iterator = this.head;

        while (iterator.next != null) {
            iterator = iterator.next;
        }

        iterator.next = node;
        node.next = null;
    }

    public void display() {
        Node iterator = this.head;

        while (iterator != null) {
            System.out.println(iterator.dataItem);
            iterator = iterator.next;
        }
    }
}
