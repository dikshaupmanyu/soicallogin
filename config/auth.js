// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	// 'facebookAuth' : {
	// 	'clientID' 		: '1393661524086784', // your App ID
	// 	'clientSecret' 	: '58234db37823bb86b021f754e185f37f', // your App Secret
	// 	'callbackURL' 	: 'http://localhost:5555/auth/facebook/callback'
	// },

	// 'twitterAuth' : {
	// 	'consumerKey' 		: 'your-consumer-key-here',
	// 	'consumerSecret' 	: 'your-client-secret-here',
	// 	'callbackURL' 		: 'http://localhost:5555/auth/twitter/callback'
	// },

	// 'googleAuth' : {
	// 	'clientID' 		: '880588681347-m5c6eck9tbrlogku2g121m71eavta91q.apps.googleusercontent.com',
	// 	'clientSecret' 	: 'me41ipvQwO6-GTDNMZj5_2yL',
	// 	'callbackURL' 	: 'http://localhost:5555/auth/google/callback'
	// }

	'facebookAuth' : {
		'clientID' 		: '1393661524086784', // your App ID
		'clientSecret' 	: '58234db37823bb86b021f754e185f37f', // your App Secret
		'callbackURL' 	: 'http://ec2-54-157-10-73.compute-1.amazonaws.com:5555/auth/facebook/callback'
	},

	// 'twitterAuth' : {
	// 	'consumerKey' 		: 'your-consumer-key-here',
	// 	'consumerSecret' 	: 'your-client-secret-here',
	// 	'callbackURL' 		: 'http://localhost:5555/auth/twitter/callback'
	// },

	'googleAuth' : {
		'clientID' 		: '825081752535-akv15aj76gb6nmp1vrr9f3nis055rif7.apps.googleusercontent.com',
		'clientSecret' 	: 'mTwLLpRPLXiF5JWqI5YOyj2A',
		'callbackURL' 	: 'http://ec2-54-157-10-73.compute-1.amazonaws.com:5555/auth/google/callback'
	}


};