package projects.singleton;

// Let’s assume that you are a member of a sports team, and your team is participating
// in a tournament. Your team needs to play against multiple opponents throughout the
// tournament. Before each of these matches, as per the rules of the game, the captains of
// the two sides must do a coin toss. If your team does not have a captain, you need to elect
// someone as a captain. Prior to each game and each coin toss, you may not repeat the
// process of electing a captain if you already nominated a person as a captain for the team.
// Basically, from every team member’s perspective, there should be only one captain of
// the team

final class Captain {
    public static Captain captain;

    private Captain() {}

    public synchronized static Captain getCaptain() {
        // lazy initialization
        if(captain == null) {
            captain = new Captain();
            System.out.println("Captain elected");
        }
        else {
            System.out.println("Only one person can be assigned as captain");
            System.out.println("Send him for the toss");
        }
        return captain;
    }
}
