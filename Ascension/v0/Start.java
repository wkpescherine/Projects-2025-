package ascension.v0;

import java.awt.*;
import javax.swing.*;

public class Start {
    JPanel start = new JPanel();
    // ImageIcon chainLogo = new
    // ImageIcon(sample.getClass().getResource("v0/chain.png"));
    // ImageIcon mainLogo = new ImageIcon("/images/chain.png");
    // ImageIcon image5 = new ImageIcon(getClass().getResource("empty.png"));

    // JLabel logo = new JLabel(mainLogo);
    // JLabel imgLabel4 = new JLabel(image5);

    JButton begin = new JButton("Create");
    JButton saved = new JButton("Saved");

    Start() {
        //logo.setPreferredSize(new Dimension(1000, 500));
        //logo.setBounds(0, 0, 1000, 500);

        begin.setPreferredSize(new Dimension(100, 50));
        begin.setBounds(395, 350, 100, 50);
        saved.setPreferredSize(new Dimension(100, 50));
        saved.setBounds(505, 350, 100, 50);

        start.add(begin);
        start.add(saved);
        //start.add(logo);
        start.setLayout(null);
        start.setBackground(Color.BLACK);
        start.setPreferredSize(new Dimension(1000, 750));
    }
}