package org.hiperesp.jogodaforca.core;

import android.annotation.SuppressLint;
import android.webkit.WebSettings;
import android.webkit.WebView;

import org.hiperesp.jogodaforca.MainActivity;
import org.hiperesp.jogodaforca.core.settings.Settings;
import org.hiperesp.jogodaforca.core.webview_client.WebViewChromeClient;
import org.hiperesp.jogodaforca.core.js_bridge.BridgeWebInterface;
import org.hiperesp.jogodaforca.core.js_native_caller.NativeCaller;
import org.hiperesp.jogodaforca.core.webview_client.WebViewNativeClient;

public class EasyApp {

    public NativeCaller nativeCaller;
    private MainActivity activity;
    private WebView webView;
    private WebViewNativeClient webViewNativeClient = new WebViewNativeClient();
    private WebViewChromeClient webViewChromeClient = new WebViewChromeClient();
    private WebSettings webSettings;
    private BridgeWebInterface bridgeWebInterface;

    public EasyApp(MainActivity activity, WebView webView) {
        this.activity = activity;
        this.webView = webView;
        configure();
        start();
    }
    private void configure(){
        webSettings = webView.getSettings();
        setChromeClient();
        setWebViewClient();
        enableDebugging();
        enableJavascript();
        addJavascriptInterface();
    }
    private void setChromeClient(){
        webView.setWebChromeClient(webViewChromeClient);
    }
    private void setWebViewClient(){
        webView.setWebViewClient(webViewNativeClient);
    }
    private void addJavascriptInterface(){
        bridgeWebInterface = new BridgeWebInterface(this, webView);
        webView.addJavascriptInterface(bridgeWebInterface, Settings.EASYAPP_NATIVE_INTERFACE);
        setPermissionManager();
    }
    private void setPermissionManager(){
        nativeCaller = new NativeCaller(activity, bridgeWebInterface);
    }
    @SuppressLint("SetJavaScriptEnabled")
    private void enableJavascript(){
        webSettings.setJavaScriptEnabled(true);
    }
    private void enableDebugging() {
        WebView.setWebContentsDebuggingEnabled(true);
    }
    private void start(){
        webView.loadUrl(Settings.indexPath);
    }

    public boolean onBackPressed(){
        if(Settings.backButtonActionToWebView) {
            if (webView.canGoBack()) {
                webView.goBack();
                return true;
            }
        }
        return false;
    }
}
