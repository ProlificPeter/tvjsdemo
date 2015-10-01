var AlertTemplate = function(simpleText) { 

//todo: accept simpleText as an array of strings to populate alert fields

	return `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>Alert Template Title</title>
        <description>${simpleText}</description>
      <button>
      	<text>OK</text>
  	  </button>
  	  </alertTemplate>
    </document>`
}