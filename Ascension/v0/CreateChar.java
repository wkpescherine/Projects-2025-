package ascension.v0;

import java.awt.*;
import javax.swing.*;

public class CreateChar {
    JPanel create = new JPanel();
    JButton play = new JButton("Play");
    JButton exit = new JButton("Exit");
    JButton savage = new JButton("Savage");
    JButton wise = new JButton("Wise");
    JButton nimble = new JButton("Nimble");
    JPanel style = new JPanel();
    JPanel race = new JPanel();
    JPanel role = new JPanel();

    CreateChar() {
        style.setPreferredSize(new Dimension(600,250));
        style.setBounds(25,25,600,175);
        style.add(savage);
        style.add(wise);
        style.add(nimble);

        race.setPreferredSize(new Dimension(600,250));
        race.setBounds(25,225,600,175);

        role.setPreferredSize(new Dimension(600,250));
        role.setBounds(25,425,600,175);

        exit.setPreferredSize(new Dimension(100, 50));
        exit.setBounds(395, 625, 100, 50);
        play.setPreferredSize(new Dimension(100, 50));
        play.setBounds(505, 625, 100, 50);

        create.add(style);
        create.add(race);
        create.add(role);
        create.add(play);
        create.add(exit);
        create.setLayout(null);
        create.setBackground(Color.BLACK);
        create.setPreferredSize(new Dimension(1000, 750));
    }
}
