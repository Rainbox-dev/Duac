﻿/*
	

Duac / Duduf Actions for After Effects
Copyright (c) 2010 Nicolas Dufresne
http://www.duduf.net



This file is part of Duac.

     Duac is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

     Duac is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with  Duac. If not, see <http://www.gnu.org/licenses/>.
*/	



/* Duduf Actions for After Effects
	layerMoveUp : Exécute un script

	*/

        //fichier temporaire d'échange entre scripts
        var tmp = new File(Folder.startup.absoluteURI + "/Scripts/(Duac)/tmp.jsx");
		tmp.open("w");
		tmp.write("#");
		tmp.close();

        //le code
		var script = "//#layerMoveUp \n" +
        "for (i=0;i<app.project.activeItem.selectedLayers.length;i++) {\n" +
        "if (app.project.activeItem.selectedLayers[i].index != app.project.activeItem.layers.length) app.project.activeItem.selectedLayers[i].moveBefore(app.project.activeItem.layer(app.project.activeItem.selectedLayers[i].index-1)) ;;\n" + 
        "}\n\n";
        

		//enregistrer le code dans un fichier temporaire
		var tmp = new File(Folder.startup.absoluteURI + "/Scripts/(Duac)/tmp.jsx");
		tmp.open("w");
		tmp.write(script);
		tmp.close();
        delete tmp;
