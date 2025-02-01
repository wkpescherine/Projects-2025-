package ascension.v0;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class CreateChar implements ActionListener{
    JPanel create = new JPanel();
    JButton play = new JButton("Play");
    JButton exit = new JButton("Exit");
    JButton savage = new JButton("Savage");
    JButton wise = new JButton("Wise");
    JButton nimble = new JButton("Nimble");
    JButton tough = new JButton("Tough");
    JButton pious = new JButton("Pious");
    JButton quick = new JButton("Quick");
    JButton human = new JButton("Human");
    JButton dwarven = new JButton("Dwarven");
    JButton elven = new JButton("Elven");
    JButton kobold = new JButton("Kobold");
    JButton ogre = new JButton("Ogre");
    JButton draco = new JButton("Draco"); 
    JButton warrior = new JButton("Warrior");
    JButton magi = new JButton("Magi");
    JButton rogue = new JButton("Rogue");
    JButton priest = new JButton("Priest");
    JButton ranger = new JButton("Ranger");
    JButton paladin = new JButton("Paladin");
    JPanel style = new JPanel();
    JPanel race = new JPanel();
    JPanel role = new JPanel();
    JLabel styleRaceRole = new JLabel("");
    JLabel sheetStr = new JLabel("STR:");
    JLabel sheetDex = new JLabel("DEX:");
    JLabel sheetQui = new JLabel("QUI:");
    JLabel sheetInt = new JLabel("INT:");
    JLabel sheetPie = new JLabel("PIE:");
    JLabel sheetCon = new JLabel("CON:");
    JLabel sheetPow = new JLabel("POW:");
    JLabel sheetSpr = new JLabel("SPR:");
    JLabel sheetHP = new JLabel("HP: ");

    String buttonName ="";

    CreateChar() {
        //Style selection section
        style.setPreferredSize(new Dimension(400,250));
        style.setBounds(25,25,400,175);
        style.add(savage);
        style.add(wise);
        style.add(nimble);
        style.add(tough);
        style.add(pious);
        style.add(quick);
        savage.addActionListener(this);
        wise.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChoice(buttonName);
                    GameConfig.style = buttonName;
                    updateSheet();
                }
            }); 
        nimble.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChoice(buttonName);
                    GameConfig.style = buttonName;
                    updateSheet();
                }
            });
        tough.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChoice(buttonName);
                    GameConfig.style = buttonName;
                    updateSheet();
                }
            });
        pious.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChoice(buttonName);
                    GameConfig.style = buttonName;
                    updateSheet();
                }
            });
        quick.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChoice(buttonName);
                    GameConfig.style = buttonName;
                    updateSheet();
                }
            });

        //Race selection section
        race.setPreferredSize(new Dimension(400,250));
        race.setBounds(25,225,400,175);
        race.add(human);
        race.add(dwarven);
        race.add(elven);
        race.add(kobold);
        race.add(ogre);
        race.add(draco);
        human.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRaceChoice(buttonName);
                    GameConfig.race = buttonName;
                    updateSheet();
                }
            });
        dwarven.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRaceChoice(buttonName);
                    GameConfig.race = buttonName;
                    updateSheet();
                }
            });
        elven.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRaceChoice(buttonName);
                    GameConfig.race = buttonName;
                    updateSheet();
                }
            });
        kobold.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRaceChoice(buttonName);
                    GameConfig.race = buttonName;
                    updateSheet();
                }
            });
        ogre.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRaceChoice(buttonName);
                    GameConfig.race = buttonName;
                    updateSheet();
                }
            });
        draco.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRaceChoice(buttonName);
                    GameConfig.race = buttonName;
                    updateSheet();
                }
            });

        //Role Selection section
        role.setPreferredSize(new Dimension(400,250));
        role.setBounds(25,425,400,175);
        role.add(warrior);
        role.add(magi);
        role.add(rogue);
        role.add(paladin);
        role.add(priest);
        role.add(ranger);
        warrior.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRoleChoice(buttonName);
                    GameConfig.role = buttonName;
                    updateSheet();
                }
            });
        magi.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRoleChoice(buttonName);
                    GameConfig.role = buttonName;
                    updateSheet();
                }
            });
        rogue.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRoleChoice(buttonName);
                    GameConfig.role = buttonName;
                    updateSheet();
                }
            });
        paladin.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRoleChoice(buttonName);
                    GameConfig.role = buttonName;
                    updateSheet();
                }
            });
        ranger.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRoleChoice(buttonName);
                    GameConfig.role = buttonName;
                    updateSheet();
                }
            });
        priest.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleRoleChoice(buttonName);
                    GameConfig.role = buttonName;
                    updateSheet();
                }
            });

        //Char stats sheet
        styleRaceRole.setPreferredSize(new Dimension(200,25));
        styleRaceRole.setBounds(650, 25,200,25);
        styleRaceRole.setForeground(Color.WHITE);
        sheetStr.setPreferredSize(new Dimension(200,25));
        sheetStr.setBounds(650, 75,200,25);
        sheetStr.setForeground(Color.WHITE);
        sheetDex.setPreferredSize(new Dimension(200,25));
        sheetDex.setBounds(650, 125,200,25);
        sheetDex.setForeground(Color.WHITE);
        sheetQui.setPreferredSize(new Dimension(200,25));
        sheetQui.setBounds(650, 175,200,25);
        sheetQui.setForeground(Color.WHITE);
        sheetInt.setPreferredSize(new Dimension(200,25));
        sheetInt.setBounds(650, 225,200,25);
        sheetInt.setForeground(Color.WHITE);
        sheetPie.setPreferredSize(new Dimension(200,25));
        sheetPie.setBounds(650, 275,200,25);
        sheetPie.setForeground(Color.WHITE);
        sheetCon.setPreferredSize(new Dimension(200,25));
        sheetCon.setBounds(650, 325,200,25);
        sheetCon.setForeground(Color.WHITE);
        sheetPow.setPreferredSize(new Dimension(200,25));
        sheetPow.setBounds(650, 375,200,25);
        sheetPow.setForeground(Color.WHITE);
        sheetSpr.setPreferredSize(new Dimension(200,25));
        sheetSpr.setBounds(650, 425,200,25);
        sheetSpr.setForeground(Color.WHITE);
        sheetHP.setPreferredSize(new Dimension(200,25));
        sheetHP.setBounds(650, 475,200,25);
        sheetHP.setForeground(Color.WHITE);




        //Panel Setup info
        exit.setPreferredSize(new Dimension(100, 50));
        exit.setBounds(395, 625, 100, 50);
        play.setPreferredSize(new Dimension(100, 50));
        play.setBounds(505, 625, 100, 50);

        create.add(style);
        create.add(race);
        create.add(role);
        create.add(play);
        create.add(exit);
        create.add(styleRaceRole);
        create.add(sheetStr);
        create.add(sheetDex);
        create.add(sheetQui);
        create.add(sheetInt);
        create.add(sheetPie);
        create.add(sheetCon);
        create.add(sheetPow);
        create.add(sheetSpr);
        create.add(sheetHP);
        create.setLayout(null);
        create.setBackground(Color.BLACK);
        create.setPreferredSize(new Dimension(1000, 750));
    }

    public void actionPerformed(ActionEvent e) {
        buttonName = ((JButton) e.getSource()).getText();
        GameConfig.handleStyleChoice(buttonName);
        GameConfig.style = buttonName;
        updateSheet();
    }

    public void updateSheet(){
        styleRaceRole.setText(GameConfig.style + " "+GameConfig.race+" "+GameConfig.role);
        sheetStr.setText("STR: " + GameConfig.stats[0] + " + " + GameConfig.statBonus[0]);
        sheetDex.setText("DEX: " + GameConfig.stats[1] + " + " + GameConfig.statBonus[1]);
        sheetQui.setText("QUI: " + GameConfig.stats[2] + " + " + GameConfig.statBonus[2]);
        sheetInt.setText("INT: " + GameConfig.stats[3] + " + " + GameConfig.statBonus[3]);
        sheetPie.setText("PIE: " + GameConfig.stats[4] + " + " + GameConfig.statBonus[4]);
        sheetCon.setText("CON: " + GameConfig.stats[5] + " + " + GameConfig.statBonus[5]);
        sheetCon.setText("POW: " + GameConfig.stats[6]);
        sheetCon.setText("SPR: " + GameConfig.stats[7]);
        sheetCon.setText("HP : " + GameConfig.stats[8]);
    }
}//227