sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit TestSuite for ch.joserojas.caribbean",
		defaults: {
			bootCore: true,
			ui5: {
				libs: "sap.ui.core,ch.joserojas.caribbean",
				theme: "sap_horizon",
				noConflict: true,
				preload: "auto"
			},
			qunit: {
				version: 2,
				reorder: false
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			},
			module: "./{name}.qunit",
			coverage: {
				only: ["ch/joserojas/caribbean/"],
				never: ["test-resources/"]
			}
		},
		tests: {
			// test file for the Example control
			Example: {
				title: "QUnit Test for Example",
				_alternativeTitle: "QUnit tests: ch.joserojas.caribbean.Example"
			}
		}
	};
});
