jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Objects in the list
// * All 3 Objects have at least one LineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"MD_Namespace/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"MD_Namespace/test/integration/pages/App",
	"MD_Namespace/test/integration/pages/Browser",
	"MD_Namespace/test/integration/pages/Master",
	"MD_Namespace/test/integration/pages/Detail",
	"MD_Namespace/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "MD_Namespace.view."
	});

	sap.ui.require([
		"MD_Namespace/test/integration/MasterJourney",
		"MD_Namespace/test/integration/NavigationJourney",
		"MD_Namespace/test/integration/NotFoundJourney",
		"MD_Namespace/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});