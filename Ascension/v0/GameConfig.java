package ascension.v0;

import java.awt.Dimension;
import java.awt.FlowLayout;
import javax.swing.*;

public class GameConfig {
    public static String state = "MAIN";
    public static String name ="";
    public static String style ="";
    public static String race = "";
    public static String role = "";
    //Basic stats by array location
    //str, dex, qui, int, pie, con, pow, spr , hp
    public static int[] styleTempValues= {0,0,0,0,0,0,0,0,0};
    public static int[] raceTempValues = {0,0,0,0,0,0,0,0,0};
    public static int[] roleTempValues = {0,0,0,0,0,0,0,0,0};
    public static int[] statBonus      = {0,0,0,0,0,0,0,0,0};
    public static int[] stats          = {0,0,0,0,0,0,0,0,0};
    public static String skills        = "";

    public static JPanel charsheet = new JPanel();
    public static JLabel skillchoice = new JLabel("SKIL: ");

    GameConfig(){
        charsheet.setLayout(new FlowLayout());
        charsheet.setPreferredSize(new Dimension(200, 75));
        charsheet.setBounds(650, 575,200,75);
        charsheet.add(skillchoice);
        //sheetStr.setPreferredSize(new Dimension(200,25));
        //sheetStr.setBounds(650, 75,200,25);
    }

    public static void handleCharSheet(){
        skillchoice.setText("SKL: " + skills);
    
    }

    public static void handleStyleChoice(String choice){
        switch (choice) {
            case "Savage":
                int[] savageStyle = {3,1,2,0,0,0,0,0,5};
                styleTempValues = savageStyle;
                statsTally();
                bonusCheck();
                break;
            case "Tough":
                int[] toughStyle = {1,1,1,0,0,3,0,0,15};
                styleTempValues = toughStyle;
                statsTally();
                bonusCheck();
                break;
            case "Wise":
                int[] wiseStyle = {0,1,2,3,0,0,15,0,0};
                styleTempValues = wiseStyle;
                statsTally();
                bonusCheck();
                break;
            case "Pious":
                int[] piousStyle = {0,1,1,1,3,0,0,10,0};
                styleTempValues = piousStyle;
                statsTally();
                bonusCheck();
                break;
            case "Nimble":
                int[] nimbleStyle = {0,3,3,0,0,0,0,0,5};
                styleTempValues = nimbleStyle;
                statsTally();
                bonusCheck();
                break;
            case "Quick":
                int[] quickStyle = {0,2,4,0,0,0,0,0,0};
                styleTempValues = quickStyle;
                statsTally();
                bonusCheck();
                break;
            default:
                throw new AssertionError();
        }
    }

    public static void handleRaceChoice(String choiceRace){
        switch (choiceRace) {
            case "Human":
                int [] humanRace = {1,1,1,1,1,1,0,0,10};
                raceTempValues = humanRace;
                statsTally();
                bonusCheck();
                break;
            case "Dwarven":
                int [] dwarvenRace = {2,1,1,0,0,3,0,0,15};
                raceTempValues = dwarvenRace;
                statsTally();
                bonusCheck();
                break;
            case "Elven":
                int [] elvenRace = {0,1,3,2,0,0,10,5,3};
                raceTempValues = elvenRace;
                statsTally();
                bonusCheck();
                break;
            case "Kobold":
                int [] koboldRace = {1,3,2,0,0,0,0,0,3};
                raceTempValues = koboldRace;
                statsTally();
                bonusCheck();
                break;
            case "Ogre":
                int [] ogreRace = {3,0,1,0,0,2,0,0,8};
                raceTempValues = ogreRace;
                statsTally();
                bonusCheck();
                break;
            case "Draco":
                int [] dracoRace = {3,0,0,0,0,3,5,5,12};
                raceTempValues = dracoRace;
                statsTally();
                bonusCheck();
                break;
            default:
                throw new AssertionError();
        }
    }

    public static void handleRoleChoice(String choiceRole){
        switch (choiceRole) {
            case "Warrior":
                int [] warriorRole = {2,0,1,0,0,3,0,0,20};
                roleTempValues = warriorRole;
                statsTally();
                bonusCheck();
                skills = "";
                handleCharSheet();
                break;
            case "Magi":
                int [] magiRole = {0,1,2,3,0,0,10,0,10};
                roleTempValues = magiRole;
                statsTally();
                bonusCheck();
                skills = "";
                handleCharSheet();
                break;
            case "Rogue":
                int [] rogueRole = {0,3,3,0,0,0,0,0,15};
                roleTempValues = rogueRole;
                statsTally();
                bonusCheck();
                skills = "";
                handleCharSheet();
                break;
            case "Paladin":
                int [] paladinRole = {2,0,0,0,2,2,0,5,15};
                roleTempValues = paladinRole;
                statsTally();
                bonusCheck();
                skills = "";
                handleCharSheet();
                break;
            case "Priest":
                int [] priestRole = {0,1,1,0,4,0,0,10,10};
                roleTempValues = priestRole;
                statsTally();
                bonusCheck();
                skills = "";
                handleCharSheet();
                break;
            case "Ranger":
                int [] rangerRole = {1,2,3,0,0,1,0,3,10};
                roleTempValues = rangerRole;
                statsTally();
                bonusCheck();
                skills = "";
                handleCharSheet();
                break;
            default:
                throw new AssertionError();
            }
    }


    public static void statsTally(){
        for(int a = 0; a<=8; a++ ){
            stats[a] = styleTempValues[a]+raceTempValues[a]+roleTempValues[a];
        }
    }

    public static void bonusCheck(){
        for(int b = 0; b <= 5; b++){
            int finalBonus = 0;
            int bonusTot = 0;
            int statCap = stats[b];
            for(int bon = 0; bonusTot <= statCap; ){
                int statCheck = statCap;
                int tempValueCheck = bonusTot + bon;
                if(tempValueCheck <= statCheck){ 
                    bonusTot = tempValueCheck;
                    finalBonus = bon;
                    bon++;
                }else{
                    statBonus[b]= finalBonus;
                    bonusTot = 9999999;
                }
            }
        }
    }  
}