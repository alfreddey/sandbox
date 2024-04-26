package projects.prototype;

public class Ford extends Car{
    public int basePrice = 10000;

    Ford(String name) {
        modelName = name;
    }

    public Car clone() throws CloneNotSupportedException {
        return (Ford) super.clone();
    }
}
