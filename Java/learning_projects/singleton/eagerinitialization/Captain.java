package projects.singleton.eagerinitialization;

class Captain {
    private static final Captain captain = new Captain();
    private Captain() {
        System.out.println("Captain elected.");
    }
    public static Captain getCaptain() {
        System.out.println("You have a captain for your team");
        return captain;
    }
    public static void dummyMethod() {
        System.out.println("This is a dummy method");
    }
 }
