package ascension.v0;

public class GameConfig {
    public static String state = "MAIN";
    public static String name ="";
    public static String style ="";
    public static String race = "";
    public static String role = "";
    public static int[] styleTempValues= {0,0,0,0,0,0};
    public static int[] raceTempValues = {0,0,0,0,0,0};
    public static int[] roleTempValues = {0,0,0,0,0,0};
    public static int strength = 0;
    public static int dexterity = 0;
    public static int quickness = 0;
    public static int constitution =0;
    public static int intelligence =0;
    public static int piety = 0;

    public static void handleStyleChocie(String choice){
        switch (choice) {
            case "Savage":
                int[] savageStyle = {3,1,2,0,0,0};
                styleTempValues = savageStyle;
                break;
            case "Wise":
                int[] wiseStyle = {3,1,2,0,0,0};
                styleTempValues = wiseStyle;
            case "Nimble":
                int[] nimbleStyle = {3,1,2,0,0,0};
                styleTempValues = nimbleStyle;
            default:
                throw new AssertionError();
        }
    }
}