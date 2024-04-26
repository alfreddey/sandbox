package projects.singleton;

public class SingletonPatternExample {
    public static void main(String[] args) {
        System.out.println("***Singleton Pattern Demo***\n");
        System.out.println("Trying to make a captain for your team:");
        Captain captain = Captain.getCaptain();
        
        System.out.println("Creating another captain");
        Captain captain2 = Captain.getCaptain();

        if(captain2 == captain)
        System.out.println("No new captain created");
    }
}
