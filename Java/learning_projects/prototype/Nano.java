package projects.prototype;

public class Nano extends Car{
    public int basePrice = 10000;

    Nano(String name) {
        modelName = name;
    }

    public Car clone() throws CloneNotSupportedException {
        return (Nano) super.clone();
    }
}

