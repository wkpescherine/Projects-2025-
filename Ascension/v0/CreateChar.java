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
    JButton human = new JButton("Human");
    JButton dwarven = new JButton("Dwarven");
    JButton warrior = new JButton("Warrior");
    JButton magi = new JButton("Magi");
    JPanel style = new JPanel();
    JPanel race = new JPanel();
    JPanel role = new JPanel();
    JLabel sheetStr = new JLabel ("STR:");
    JLabel sheetDex = new JLabel ("DEX:");
    JLabel sheetQui = new JLabel ("QUI:");

    String buttonName ="";

    CreateChar() {
        //Style selection section
        style.setPreferredSize(new Dimension(600,250));
        style.setBounds(25,25,600,175);
        style.add(savage);
        style.add(wise);
        style.add(nimble);
        savage.addActionListener(this);
        wise.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChocie(buttonName);
                    updateSheet();
                }
            }); 
        nimble.addActionListener(
            new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    buttonName = ((JButton) e.getSource()).getText();
                    GameConfig.handleStyleChocie(buttonName);
                    updateSheet();
                }
            });

        //Race selection section
        race.setPreferredSize(new Dimension(600,250));
        race.setBounds(25,225,600,175);
        race.add(human);
        race.add(dwarven);

        //Role Selection section
        role.setPreferredSize(new Dimension(600,250));
        role.setBounds(25,425,600,175);
        role.add(warrior);
        role.add(magi);

        //Char stats sheet
        sheetStr.setPreferredSize(new Dimension(200,25));
        sheetStr.setBounds(650, 25,200,25);
        sheetStr.setForeground(Color.WHITE);
        sheetDex.setPreferredSize(new Dimension(200,25));
        sheetDex.setBounds(650, 75,200,25);
        sheetDex.setForeground(Color.WHITE);
        sheetQui.setPreferredSize(new Dimension(200,25));
        sheetQui.setBounds(650, 125,200,25);
        sheetQui.setForeground(Color.WHITE);

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
        create.add(sheetStr);
        create.add(sheetDex);
        create.add(sheetQui);
        create.setLayout(null);
        create.setBackground(Color.BLACK);
        create.setPreferredSize(new Dimension(1000, 750));
    }

    public void actionPerformed(ActionEvent e) {
        buttonName = ((JButton) e.getSource()).getText();
        GameConfig.handleStyleChocie(buttonName);
        updateSheet();
    }

    //public void updateSheet(){
    //    sheetStr.setText("STR: " + GameConfig.stats[0]);
    //    sheetDex.setText("DEX: " + GameConfig.stats[1]);
    //    sheetQui.setText("QUI: " + GameConfig.stats[2]);
    //}

    public void updateSheet(){
        sheetStr.setText("STR: " + GameConfig.stats[0] + " + " + GameConfig.statBonus[0]);
        sheetDex.setText("DEX: " + GameConfig.stats[1] + " + " + GameConfig.statBonus[1]);
        sheetQui.setText("QUI: " + GameConfig.stats[2] + " + " + GameConfig.statBonus[2]);
    }
}
//64