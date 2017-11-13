function registerPushwooshIOS() {
 	var pushNotification = window.plugins.pushNotification;

 	//set push notification callback before we initialize the plugin
	document.addEventListener('push-notification',
		function(event)
		{
			//get the notification payload
			var notification = event.notification;

			//display alert to the user for example
			alert(notification.aps.alert);
			
			//to view full push payload
			//alert(JSON.stringify(notification));
			
			//clear the app badge
			pushNotification.setApplicationIconBadgeNumber(0);
		}
	);

	//trigger pending push notifications
	pushNotification.onDeviceReady();

	//register for pushes.
	//!!! Please note this is an API for PGB plugin. This code is different in CLI plugin!!!
	//At the moment I cannot update the plugin to the latest version. TY PGB Team!
	//see http://community.phonegap.com/nitobi/topics/malformed_xml_in_plugin_xml_file?utm_source=notification&utm_medium=email&utm_campaign=new_reply&utm_content=reply_button&reply%5Bid%5D=14224918#reply_14224918
	pushNotification.registerDevice({alert:true, badge:true, sound:true, pw_appid:"539E9-AB8AE", appname:"Pushwoosh"},
		function(status)
		{
			var deviceToken = status['deviceToken'];
			console.warn('registerDevice: ' + deviceToken);
			onPushwooshiOSInitialized(deviceToken);
		},
		function(status)
		{
			console.warn('failed to register : ' + JSON.stringify(status));
			//alert(JSON.stringify(['failed to register ', status]));
		}
	);
	
	//reset badges on start
	pushNotification.setApplicationIconBadgeNumber(0);
}

function onPushwooshiOSInitialized(pushToken)
{
	var pushNotification = window.plugins.pushNotification;
	//retrieve the tags for the device
	pushNotification.getTags(
		function(tags) {
			console.warn('tags for the device: ' + JSON.stringify(tags));
		},
		function(error) {
			console.warn('get tags error: ' + JSON.stringify(error));
		}
	);
}
