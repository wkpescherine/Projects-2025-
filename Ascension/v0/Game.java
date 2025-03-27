package ascension.v0;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JPanel;

public class Game implements ActionListener{
    JPanel game = new JPanel();
    JButton exit = new JButton("Exit");

    Game() {
        exit.setPreferredSize(new Dimension(100, 50));
        exit.setBounds(450, 650, 100, 50);

        game.add(exit);
        game.setLayout(null);
        game.setBackground(Color.BLACK);

        game.setPreferredSize(new Dimension(1000, 750));
    }

    public void actionPerformed(ActionEvent e) {
        GameConfig.state = "MAIN";
    }
}