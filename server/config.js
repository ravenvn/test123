// first remove configuration in case service is already configured
Accounts.loginServiceConfiguration.remove({
	service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
	service: "facebook",
	appId: "631464893539483",
	secret: "3a4a5c5f65ed7c1df34d6d9eb3f092d7"
});