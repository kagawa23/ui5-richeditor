sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller){
	"use strict";

	return Controller.extend("sap.ui.richtexteditor.sample.RichTextEditor.controller.RichTextEditor", {
		onInit: function() {
			var that = this,
				sHtmlValue = '';
			sap.ui.require(["sap/ui/richtexteditor/RichTextEditor"],
				function (RTE) {
					var oRichTextEditor = new RTE("myRTE", {
						width: "100%",
						height: "600px",
						value: sHtmlValue,
						ready: function () {
							this.addButtonGroup("styleselect").addButtonGroup("table");
						},
						beforeEditorInit: function(event){
							let {configuration} = event.getParameters()
							configuration = Object.assign(configuration,{
								plugins: 'textpattern',
								toolbar: 'undo redo',
								menubar: false,
								textpattern_patterns: [
								  {start: '#', format: 'h1'},
								  {start: '##', format: 'h2'},
								  {start: '###', format: 'h3'},
								  {start: '####', format: 'h4'},
								  {start: '#####', format: 'h5'},
								  {start: '######', format: 'h6'},
								  {start: '**', end: '**', format: 'bold'},
								  {start: '`', end:'`',format:'code'},
								  ]
							  });
							// configuration = Object.assign({
							// 	plugins: 'textpattern',
							// 	// textpattern_patterns: [
							// 	// 	{start: '*', end: '*', format: 'italic'},
							// 	// 	{start: '**', end: '**', format: 'bold'},
							// 	// 	{start: '#', format: 'h1'},
							// 	// 	{start: '##', format: 'h2'},
							// 	// 	{start: '###', format: 'h3'}
							// 	// ]
							// },configuration)
							// configuration.plugins = 'textpattern'
						}
					});

					that.getView().byId("idVerticalLayout").addContent(oRichTextEditor);
			});
		}
	});
});
