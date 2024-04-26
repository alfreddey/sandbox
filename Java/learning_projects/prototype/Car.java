package projects.prototype;

import java.util.Random;

public abstract class Car implements Cloneable{
    public String modelName;
    public int basePrice, onRoadPrice;

    public String getModelName() {return modelName;}
    public void setModelName(String m) {modelName = m;}

    public static int setAdditionalPrice() {
        Random random = new Random();
        int price = random.nextInt(10000);
        return price;
    }

    public Car clone() throws CloneNotSupportedException {
        return (Car) super.clone();
    }
}
