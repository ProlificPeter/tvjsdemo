var resourceLoader;

App.onLaunch = function(options){ /* App Launcher */
	var javascriptFiles = [
	`${options.BASEURL}js/ResourceLoader.js`,
	`${options.BASEURL}js/Presenter.js`,
	];

	evaluateScripts(javascriptFiles, function(success) { /* Evaluate JS base files for errors. Freak out if necessary */
		if(success){
			resourceLoader = new ResourceLoader(options.BASEURL);
			resourceLoader.loadResource(`${options.BASEURL}templates/AlertTemplate.tvml.js`, "This is a test", function(resource) {
				var doc = Presenter.makeDocument(resource);
				
				Presenter.pushDocument(doc);

			});
		} else{
			// Necessaryily freaking out. Explain who is the culprit.
			var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external Javascript files: " + javascriptFiles);
			navigationDocument.presentModal(errorDoc);
		}
	});
}

var createAlert = function(title, description) {
	var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
      <button>
      	<text>OK</text>
  	  </button>
  	  </alertTemplate>
    </document>`
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
}