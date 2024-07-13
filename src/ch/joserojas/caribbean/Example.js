/*!
 * ${copyright}
 */

// Provides control ch.joserojas.caribbean.Example.
sap.ui.define(["./library", "sap/ui/core/Control", "./ExampleRenderer"], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	const ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>ch.joserojas.caribbean.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author José Rojas
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias ch.joserojas.caribbean.Example
	 */
	const Example = Control.extend(
		"ch.joserojas.caribbean.Example",
		/** @lends ch.joserojas.caribbean.Example.prototype */ {
			metadata: {
				library: "ch.joserojas.caribbean",
				properties: {
					/**
					 * The text to display.
					 */
					text: {
						type: "string",
						group: "Data",
						defaultValue: null
					},
					/**
					 * The color to use (default to "Default" color).
					 */
					color: {
						type: "ch.joserojas.caribbean.ExampleColor",
						group: "Appearance",
						defaultValue: ExampleColor.Default
					}
				},
				events: {
					/**
					 * Event is fired when the user clicks the control.
					 */
					press: {}
				}
			},
			renderer: ExampleRenderer,
			onclick: function () {
				this.firePress();
			}
		}
	);
	return Example;
});
