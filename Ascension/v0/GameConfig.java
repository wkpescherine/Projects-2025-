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
    public static int[] statBonus      = {0,0,0,0,0,0};
    public static int[] stats          = {0,0,0,0,0,0};

    public static void handleStyleChoice(String choice){
        switch (choice) {
            case "Savage":
                int[] savageStyle = {3,1,2,0,0,0};
                styleTempValues = savageStyle;
                statsTally();
                //bonusCheck();
                break;
            case "Wise":
                int[] wiseStyle = {0,1,2,3,0,0};
                styleTempValues = wiseStyle;
                statsTally();
                //bonusCheck();
                break;
            case "Nimble":
                int[] nimbleStyle = {0,3,3,0,0,0};
                styleTempValues = nimbleStyle;
                statsTally();
                //bonusCheck();
                break;
            default:
                throw new AssertionError();
        }
    }

    public static void handleRaceChoice(String choiceRace){
        switch (choiceRace) {
            case "Human":
                int [] humanRace = {1,1,1,1,1,1};
                raceTempValues = humanRace;
                statsTally();
                //bonusCheck();
                break;
            case "Dwarven":
                int [] dwarvenRace = {2,1,1,0,0,3};
                raceTempValues = dwarvenRace;
                statsTally();
                //bonusCheck();
                break;
            case "Elven":
                int [] elvenRace = {0,1,3,2,0,0};
                raceTempValues = elvenRace;
                statsTally();
                //bonusCheck();
                break;
            default:
                throw new AssertionError();
        }
    }

    public static void handleRoleChoice(String choiceRole){
        switch (choiceRole) {
            case "Warrior":
                int [] warriorRole = {2,0,1,0,0,3};
                roleTempValues = warriorRole;
                statsTally();
                //bonusCheck();
                break;
            case "Magi":
                int [] magiRole = {0,1,2,3,0,0};
                roleTempValues = magiRole;
                statsTally();
                //bonusCheck();
                break;
            case "Rogue":
                int [] rogueRole = {0,3,3,0,0,0};
                roleTempValues = rogueRole;
                statsTally();
                //bonusCheck();
                break;
            default:
                throw new AssertionError();
            }
    }


    public static void statsTally(){
        for(int a = 0; a<=5; a++ ){
            stats[a] = styleTempValues[a]+raceTempValues[a]+roleTempValues[a];
        }
    }

    public static void bonusCheck(){
        for(int b = 0; b <= 5; b++){
            int bonVal = 0;
            for(int c = 0; bonVal <= stats[b]; c++){
                if(bonVal < stats[b]){bonVal = bonVal+c;}
                else{ statBonus[b]= c-1;}
            }
        }
    }  
}