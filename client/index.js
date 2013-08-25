Template.user_loggedout.events({
	"click #login": function(e, tmpl) {
		Meteor.loginWithFacebook({
			requestPermissions: ["email", "name"]
		}, function(err) {
			if (err) {
				//show err
			} else {
				// show success
			}
		});
	}
});

Template.user_loggedin.events({
	"click #logout": function(e, tmpl) {
		Meteor.logout(function(err) {
			if (err) {
				//show err
			} else {
				// show success
			}
		});
	}
});