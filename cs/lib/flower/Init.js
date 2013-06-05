/**
* ClickScript - ClickScript is a visual programming language. This is a
* data flow programming language running entirely in a web browser.
* Copyright (C) 2012 Lukas Naef
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*
* @author lnaef
*/

//dojo.provide("cs.lib.flower.init");

//dojo.require("cs.lib.flower.Util");

dojo.require("cs.lib.flower.init");


window.flowerUtil = new cs.lib.flower.Util();

cs.componentContainer.push({
name : "cs.flower.flower",
description : "Flower blooms if SWITCH is on",
inputs :
[{
name: "SWITCH",
type: "cs.type.Boolean"
}],
outputs:
[],
image: "flower/Opened_flower.png",
exec : function(state){
var input = state.inputs.item(0).getValue();
if(input){
state.view.switchOn();
} else {
state.view.switchOff();
}
},
view : {

source: "<img src='"+cs.config.rootPath + "lib/flower/Closed_flower.png'/>",

on: "lib/flower/Opened_flower.png",

off: "lib/flower/Closed_flower.png",  

switchOn : function(){
this.getNode().src = cs.config.rootPath + this.on;
},

switchOff : function(){
this.getNode().src = cs.config.rootPath + this.off;
}

},

reset : function(state){
state.view.switchOff();
}
});
