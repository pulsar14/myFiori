jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"MD_Namespace/test/integration/NavigationJourneyPhone",
		"MD_Namespace/test/integration/NotFoundJourneyPhone",
		"MD_Namespace/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

