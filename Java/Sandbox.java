public class Sandbox {
    public static void swap(int a, int b, int[] arr) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };

    public static int[] reverseArray(int[] arr) {
        int size = arr.length;
        int mid = (int) (size / 2);
        int leftIndex = mid - 1;
        int rightIndex = (size % 2 == 0) ? leftIndex + 1 : mid + 1;

        while (leftIndex >= 0) {
            swap(leftIndex, rightIndex, arr);
            leftIndex -= 1;
            rightIndex += 1;
        }
        return arr;
    };

    public static void main(String[] args) {
        LinkedList list = new LinkedList(new Node(12));
        list.append(new Node(11));
        list.append(new Node(10));
        list.append(new Node(21));
        list.append(new Node(17));

        list.display();
        System.out.println(list.toString());
    }
}