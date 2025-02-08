package ascension.v0;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class SkillSelection implements ActionListener{
    JPanel skillselection = new JPanel();
    JButton slash1 = new JButton("Slash I");
    JButton spark1 = new JButton("Spark I");
    JButton heal1 = new JButton("Heal I");
    JButton impcrit1 = new JButton("Imp Crit I"); 

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

        skillselection.add(slash1);
        skillselection.add(spark1);
        skillselection.add(heal1);
        skillselection.add(impcrit1);
    }

    public void hideAllSkills(){
        slash1.setVisible(false);
        spark1.setVisible(false);
        heal1.setVisible(false);
        impcrit1.setVisible(false);
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
    }

    public void actionPerformed(ActionEvent e) {
        GameConfig.skills = "Slash I";
        GameConfig.handleCharSheet();
    }
}