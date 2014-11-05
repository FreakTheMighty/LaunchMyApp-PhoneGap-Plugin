(function () {
    "use strict";
    
    function triggerOpenURL() {
          cordova.exec(
              function(url){
              	if(typeof handleOpenURL == "function"){
                  handleOpenURL(url);
                }
                window.plugins.launchmyapp.fromurl = url;
              },
              null,
              "LaunchMyApp",
              "checkIntent",
              []);
    }

  document.addEventListener("deviceready", triggerOpenURL, false);
}());
