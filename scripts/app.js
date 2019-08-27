import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

$(() => {
	svg4everybody();
});

$(document).ready(() => {
	let links = $('.jslvl__option');
	let picker = $('.jslvl__picker');
	let values = [13, 160, 385, 777];

	const slide = (value) => $(".jslvl__picker").css("left", value - 13);

	slide(values[2]);

	links.click(function() {
		slide(values[$(this).index()]);
	});

	picker.draggable({
		axis: "x",
		containment: ".jslvl__slider",
		cursor: "pointer",
		stop: (e, ui) => slide(getClosest(parseInt(picker.css("left").replace("px", ''))))
	});
	
	const getClosest = (value) => {
		var closest = null;
		$.each(values, function(_key, _value) {
			if (closest == null || Math.abs(this - value) < Math.abs(closest - value)) {
				closest = this;
			}   
		});
		return closest;
	}
});

