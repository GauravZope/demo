
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
		document.addEventListener("deviceready",loaded, false);
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
function loaded(){
	alert("loaded")
if( window.plugins && window.plugins.NativeAudio ) {
    alert("if")
    // Preload audio resources 
    window.plugins.NativeAudio.preloadComplex( 'music',
     'Alan Walker - Alone.mp3', 1, 1, 0, function(msg){
     	alert( "Yeaaaaah" );
    }, function(msg){
        alert( 'error: ' + msg );
    });
    
    window.plugins.NativeAudio.loop( 'music' );
 
    // Stop multichannel clip after 60 seconds 
    window.setTimeout( function(){
 
        window.plugins.NativeAudio.stop( 'music' );
            
        window.plugins.NativeAudio.unload( 'music' );
 
    }, 1000 * 60 );
}
else{
	alert("else")
}}