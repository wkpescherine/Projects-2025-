package com.example.mystika;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        checkAccount();
    }

    public void LogIn(View v){
        Intent Login = new Intent(this, Home.class);
        startActivity(Login);
    }

    public void createAccount(View v){
        Intent Login = new Intent(this, CreateAccount.class);
        startActivity(Login);
    }

    public void checkAccount(){
        String filename = "MYSTIKA";
        SharedPreferences sp = getSharedPreferences(filename,MODE_PRIVATE);
        if(filename.isEmpty()){
            SharedPreferences.Editor editor = sp.edit();
            editor.putString("Username", "None");
            editor.putString("Password", "None");
            editor.putInt("TempleLvl", 0);
            editor.putInt("MineLvl", 0);
            editor.putInt("MeetingHallLvl", 0);
            editor.putInt("ElvenLibraryLvl", 0);
            editor.putInt("UndeadBoneShrineLvl", 0);
            editor.commit();
        }
    }
}