package projects.prototype;

public class PrototypeExample {
    public static void main(String[] args) throws CloneNotSupportedException{
        Car nano = new Nano("Nano Red");
        Car nanoClone = nano.clone();

        System.out.println(nano.basePrice);

    }
}
