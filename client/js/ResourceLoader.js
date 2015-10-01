function ResourceLoader(baseurl) {
		this.BASEURL = baseurl;
}

ResourceLoader.prototype.loadResource = function(resource, passThrough, callback) {
	var self = this;
	evaluateScripts([resource], function(success) {
		if(success) {
			var resource = AlertTemplate(passThrough);
			callback.call(self, resource);
		}
		else {
			var title = "Resource Loader Error",
			description = `Error loading resource '${resource}'. \n\n Try again later.`,
			alert = createAlert(title, description);
		navigationDocument.presentModal(alert);
		}
		
	});
}