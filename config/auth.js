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
	// 	'clientID' 		: '987299196455-ep89rmp6ouqeanqvqu2o91863hrfdkjn.apps.googleusercontent.com',
	// 	'clientSecret' 	: 'yzvsllPL2erjdKm64wwjyOtR',
	// 	'callbackURL' 	: 'http://localhost:5555/auth/google/callback'
	// }

	'facebookAuth' : {
		'clientID' 		: '1393661524086784', // your App ID
		'clientSecret' 	: '58234db37823bb86b021f754e185f37f', // your App Secret
		'callbackURL' 	: 'http://ec2-54-157-10-73.compute-1.amazonaws.com:5555/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:5555/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '987299196455-ep89rmp6ouqeanqvqu2o91863hrfdkjn.apps.googleusercontent.com',
		'clientSecret' 	: 'yzvsllPL2erjdKm64wwjyOtR',
		'callbackURL' 	: 'http://ec2-54-157-10-73.compute-1.amazonaws.com:5555/auth/google/callback'
	}


};