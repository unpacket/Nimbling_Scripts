﻿#target Illustratorif ( app.documents.length > 0 ) {	mySelection = activeDocument.selection;	if (mySelection.length>0){
	    var doc = app.activeDocument;                   //current document	    var sel    = doc.selection;                       //current slection	    var sl   = sel.length;                            //number of selected objects	    var m  = app.getScaleMatrix(-100,100);          //H flip matrix - feel free to change to (100,-100) for vertical flip, etc.			newGroup = app.activeDocument.groupItems.add();
			var backitem = sel[sl-1];
			newGroup.move (backitem , ElementPlacement.PLACEAFTER);
	    for(var i = 0 ; i < sl; i++) sel[i].move( newGroup , ElementPlacement.PLACEATBEGINNING); //Group these fuckers!
			newGroup.transform(m); //apply the flip matrix to the group			for(var i = 0 ; i < sl; i++) sel[i].move( newGroup , ElementPlacement.PLACEAFTER); //Release them from their groupness :)	    app.redraw();	}else{	    alert("Nothing selected!")	}}