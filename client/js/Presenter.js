// The following class implements elements of the NavigationDocument class found here:
// https://developer.apple.com/library/prerelease/tvos/documentation/TVMLJS/Reference/TVJSNavigationDocument_Ref/index.html

var Presenter = {
	
	// check if Presenter exists, if not, create.
	// Prevent creation of extra DOMParsers.
	makeDocument: function(resource) {
		if (!Presenter.parser) {
			Presenter.parser = new DOMParser();
		}
		var doc = Presenter.parser.parseFromString(resource, "application/xml");
    	return doc;
	},

	//create presentModal function within the Presenter class
	modalDialoguePresenter: function(xml) {
		navigationDocument.presentModal(xml);
	},

	//create pushDocument function within the Presenter class
	pushDocument: function(xml) {
		navigationDocument.pushDocument(xml);
	},

}