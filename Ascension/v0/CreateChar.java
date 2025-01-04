package ascension.v0;

import java.awt.*;
import javax.swing.*;

public class CreateChar {
    JPanel create = new JPanel();
    JButton play = new JButton("Play");
    JButton exit = new JButton("Exit");
    JPanel style = new JPanel();
    JPanel race = new JPanel();
    JPanel role = new JPanel();

    CreateChar() {
        style.setPreferredSize(new Dimension(600,150));
        style.setBounds(50,50,600,250);

        race.setPreferredSize(new Dimension(600,150));
        race.setBounds(50,300,600,250);

        role.setPreferredSize(new Dimension(600,150));
        role.setBounds(50,550,600,250);

        exit.setPreferredSize(new Dimension(100, 50));
        exit.setBounds(395, 600, 100, 50);
        play.setPreferredSize(new Dimension(100, 50));
        play.setBounds(505, 600, 100, 50);

        create.add(style);
        create.add(race);
        create.add(role);
        create.add(play);
        create.add(exit);
        create.setLayout(null);
        create.setPreferredSize(new Dimension(1000, 750));
    }
}
