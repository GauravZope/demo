
var app = {
    // Application Constructor
    initialize: function() {
		this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		document.addEventListener("deviceready", this.onDeviceReady, false);
    },
	
	onDeviceReady: function() {
   		  if (navigator.notification) { // Override default HTML alert with native dialog
		  window.alert = function (message) {
			  navigator.notification.alert(
				  message,   	 // message
				  null,       	// callback
				  "Alert", 	   // title
				  'OK'        // buttonName
			  );
		  };
	 	}
	}
};
if( window.plugins && window.plugins.NativeAudio ) {
    
    // Preload audio resources 
    window.plugins.NativeAudio.preloadComplex( 'music', 'Alan Walker - Alone.mp3', 1, 1, 0, function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
    
   s
 
 
    // Play 
    window.plugins.NativeAudio.loop( 'music' );
 
 
    // Stop multichannel clip after 60 seconds 
    window.setTimeout( function(){
 
        window.plugins.NativeAudio.stop( 'music' );
            
        window.plugins.NativeAudio.unload( 'music' );
 
    }, 1000 * 60 );
}