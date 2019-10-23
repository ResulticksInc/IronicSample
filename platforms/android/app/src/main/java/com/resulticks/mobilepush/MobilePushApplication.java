package com.resulticks.mobilepush;

import android.app.Application;

import io.mob.resu.reandroidsdk.ReAndroidSDK;

public class MobilePushApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        ReAndroidSDK.getInstance(this);
    }
}
