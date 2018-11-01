/*window.Converter = (function($) { 
    "use strict";

 $.fn.converter = function(object, opts) { 
 		console.log("in converter");
	};
}(jQuery));*/


 $.fn.converter = function(obj, opts) { 
 		console.log(this);
 		var dataArray = obj.step1.fields;

 		var formTag =  $("<form>");
        var html = formTag.addClass("medea-root").addClass("form-horizontal");

 		for(var i=0; i<dataArray.length; i++){
 			/*console.log(JSON.stringify(dataArray[i].hint));
 			console.log(JSON.stringify(dataArray[i].key));
 			console.log(JSON.stringify(dataArray[i].type));
 			console.log(JSON.stringify(dataArray[i].values));*/

 			var fieldValue = dataArray[i].values;
            var fieldType = dataArray[i].type;
            var fieldName = dataArray[i].key;

            var section = $("<div>")
                        .addClass("section")
                        .addClass(css.formRowClass);

                    // indent as per level within the original object
                    //section.addClass("col-sm-offset-" + options.labelColumns+level);
                    var sectionTitle = $("<div>")
                        .addClass("section-title")
                        .html(regularCase(fieldName));
                    section.append(sectionTitle);
                    section.append(inputFieldElement(fieldName, fieldValue, "text"));
                    //section.append(objToForm(fieldValue, fieldName, ++level));
                    console.log(section);
                    html.append(section);
                    //console.log(JSON.stringify(html));
 		}
 		var container = $(this);
 		container.html(html);
 		console.log(html);
 		
	};


	var options = {};

	var css = { 
        formRowClass: "medea-form-data-row",
        buttonRowClass: "medea-form-buttons-row",
    };

	var level =0;

	function regularCase(str) { 
        if(str === null) { return ""; }
        return str
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
            .replace(/^./, function(s){ return s.toUpperCase(); });
    }


	function inputFieldElement(name, value, type) { 

        var name = name ? name : "name";
        var value = value ? value : "";
        var type = type ? type : "text";

        var inp = $("<input>")
            .addClass("form-control")
            .attr("type", type)
            .attr("data-json-type", $.type(value))
            .attr("name", name)
            .attr("value", value)
            .attr("placeholder", "- new value here -");

        if(type === "checkbox") { 
            inp.prop("checked", value);
        }

        return inp;

    }