/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ch.joserojas.caribbean.
 */
sap.ui.define([
	"sap/base/util/ObjectPath",
	"sap/ui/core/library"
], function (ObjectPath) {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "ch.joserojas.caribbean",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"ch.joserojas.caribbean.ExampleColor"
		],
		interfaces: [],
		controls: [
			"ch.joserojas.caribbean.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>ch.joserojas.caribbean</code>
	 *
	 * @namespace
	 * @alias ch.joserojas.caribbean
	 * @author José Rojas
	 * @version ${version}
	 * @public
	 */
	const thisLib = ObjectPath.get("ch.joserojas.caribbean");

	/**
	 * Semantic Colors of the <code>ch.joserojas.caribbean.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
