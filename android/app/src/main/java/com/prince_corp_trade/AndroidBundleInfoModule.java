package com.prince_corp_trade;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AndroidBundleInfoModule extends ReactContextBaseJavaModule
{
  ReactApplicationContext reactContext;

  public AndroidBundleInfoModule(ReactApplicationContext reactContext)
  {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName()
  {
    return "AndroidBundleInfo";
  }

//   @ReactMethod
//   public void getApkVersionCode(Promise promise)
//   {
//     try
//     {
//       ApplicationInfo app = this.reactContext.getPackageManager().getApplicationInfo(this.reactContext.getPackageName(), PackageManager.GET_META_DATA);
//       Bundle bundle = app.metaData;
//       promise.resolve(bundle.getInt("apkVersionCode"));
//     }
//     catch (Exception e)
//     {
//       e.printStackTrace();
//       promise.reject("APK_VERSION_CODE_FETCH_ERROR", e);
//     }
//   }

  @ReactMethod
  public void getNpmVersionCode(Promise promise)
  {
    try
    {
      ApplicationInfo app = this.reactContext.getPackageManager().getApplicationInfo(this.reactContext.getPackageName(), PackageManager.GET_META_DATA);
      Bundle bundle = app.metaData;
      promise.resolve(bundle.getString("npmVersionCode"));
    }
    catch (Exception e)
    {
      e.printStackTrace();
      promise.reject("NPM_VERSION_CODE_FETCH_ERROR", e);
    }
  }
}
