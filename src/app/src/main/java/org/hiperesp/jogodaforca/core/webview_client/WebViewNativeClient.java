package org.hiperesp.jogodaforca.core.webview_client;

import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewNativeClient extends WebViewClient {

    //@Override;
    public void onPageFinished(WebView view, String url) {
        //view.evaluateJavascript("(()=>{let color = document.querySelector(\"meta[name='theme-color'\").content; if(color) window."+ Settings.easyAppNativeInterface+".__setStatusBarColor(color)});", null);
        super.onPageFinished(view, url);
    }
}
