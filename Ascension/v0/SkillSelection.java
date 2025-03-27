package ascension.v0;

import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JPanel;

public class SkillSelection implements ActionListener{
    JPanel skillselection = new JPanel();
    JButton slash1 = new JButton("Slash I");
    JButton spark1 = new JButton("Spark I");
    JButton heal1 = new JButton("Heal I");
    JButton impcrit1 = new JButton("Imp Crit I");
    JButton smite1 = new JButton("Smite I"); 
    JButton faith1 = new JButton("Faith I"); 
    JButton quickshot1 = new JButton("Quickshot I"); 
    JButton shock1 = new JButton("Shock I"); 

    SkillSelection(){
        hideAllSkills();
        skillselection.setLayout(new FlowLayout());
        skillselection.setPreferredSize(new Dimension(150, 300));

        slash1.addActionListener(this);
        spark1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Spark I";
                    GameConfig.handleCharSheet();
                }
            }); 
        heal1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Heal I";
                    GameConfig.handleCharSheet();
                }
            }); 
        impcrit1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Imp Crit I";
                    GameConfig.handleCharSheet();
                }
            }); 
        smite1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Imp Crit I";
                    GameConfig.handleCharSheet();
                }
            }); 
        faith1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Faith I";
                    GameConfig.handleCharSheet();
                }
            }); 
        quickshot1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Quickshot I";
                    GameConfig.handleCharSheet();
                }
            }); 
        shock1.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    GameConfig.skills = "Shock I";
                    GameConfig.handleCharSheet();
                }
            }); 
    
        skillselection.add(slash1);
        skillselection.add(spark1);
        skillselection.add(heal1);
        skillselection.add(impcrit1);
        skillselection.add(smite1);
        skillselection.add(faith1);
        skillselection.add(shock1);
        skillselection.add(quickshot1);
    }

    public void hideAllSkills(){
        slash1.setVisible(false);
        spark1.setVisible(false);
        heal1.setVisible(false);
        impcrit1.setVisible(false);
        smite1.setVisible(false);
        faith1.setVisible(false);
        shock1.setVisible(false);
        quickshot1.setVisible(false);
    }

    public void checkSkillsAvaialable(){
        hideAllSkills();
        if(GameConfig.role.equals("Warrior")){ 
            slash1.setVisible(true);
        }
        if(GameConfig.role.equals("Magi")){
            spark1.setVisible(true);
        }
        if(GameConfig.role.equals("Priest")){
            heal1.setVisible(true);
        }
        if(GameConfig.role.equals("Rogue")){
            impcrit1.setVisible(true);
        }
        if(GameConfig.role.equals("Paladin")){
            smite1.setVisible(true);
        }
        if(GameConfig.role.equals("Cleric")){
            faith1.setVisible(true);
        }
        if(GameConfig.role.equals("Ranger")){
            quickshot1.setVisible(true);
        }
        if(GameConfig.role.equals("Archmage")){
            shock1.setVisible(true);
        }
    }

    public void actionPerformed(ActionEvent e) {
        GameConfig.skills = "Slash I";
        GameConfig.handleCharSheet();
    }
}