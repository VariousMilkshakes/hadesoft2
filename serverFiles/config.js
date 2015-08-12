module.exports = {
	"db" : "a2001371-7b8f-4f52-aae0-4c8a3c191d28",
	"dbLocal" : "local-users",
	"dbOnline" : "online-users",
	"dbForum" : "forum-posts",
	"dev" : {
		"dir" : "./",
		"ip" : "82.37.178.154",
		"port" : 8765,
		"publicKey" : "6LdNxQcTAAAAADiOaSEZKH40wOvTpWl2nap13vKP",
		"privateKey" : "6LdNxQcTAAAAAEVT7sKneALrfJSnr4JWG3zh_uIs"
	},
	"defaultAvatar" : "/images/standing.png",
	"dir" : process.env.OPENSHIFT_REPO_DIR,
	"ip" : process.env.OPENSHIFT_NODEJS_IP,
	"mail" : {
		"host" : "mail.hadesbroadband.co.uk",
		"login" : {
			user : "noreply@hadesbroadband.co.uk",
			pass : "478gd8h392bd883uhd8h3hd&&&"
		},
		"options" : {
			rejectUnauthorized : false
		},
		"port" : 26,
		"secure" : false
	},
	"forum" : {
		"userUploads" : "./forumFiles/profiles",
		"userAvatars" : "/avatars/"
	},
	"port" : process.env.OPENSHIFT_NODEJS_PORT,
	"secret" : "SECRETPLACEHOLD",
	"site" : {
		"bannerMessage" : "The Workshop",
		"title" : "HadeSoft",
		"welcomeMessage" : "Welcome"
	}
};
