package com.example.mystika;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    public void Quit(View v){
        Intent Quit = new Intent(this, MainActivity.class);
        startActivity(Quit);
    }

    public void Map(View v){
        Intent WorldMap = new Intent(this, WorldMap.class);
        startActivity(WorldMap);
    }
}