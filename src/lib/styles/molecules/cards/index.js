// ==================== Imports ====================//

//React
import Image from "next/image";
import React, { useContext } from "react";
import { ViewContext } from "../../organisms/vendors/context/viewPort";

// State
import jQuery from "jquery";

// Components

// ==================== Imports ====================//

// ==================== Render ====================//


export default function Cards() {

		const viewPort = useContext(ViewContext);


		let card = [];
		for (var cardIndex = 0; cardIndex <= 7; cardIndex++) {

			card.push(
				<li key={cardIndex} className='item'>
					<div className='close'>×</div>
					<Image
						className='item-image'
						alt='Starmax Recordz Logo'
						src={
							viewPort
								? "/Icons/Logo/Starmax.svg"
								: "/Icons/Logo/Starmax_Recordz.svg"
						}
						width={viewPort ? 30 : 130}
						height={viewPort ? 30 : 30}
					/>
				</li>,
			);
		}

		(function ($) {
			var _originalY,
				_transitionDurations = {};

			$(document).ready(function () {
				// expand item
				$("body").on("click", ".item:not(.active)", function () {
					$("#📦").addClass("noscroll");

					_originalY = parseInt($(this).css("top"));

					var _timeFactor = (_originalY - $("#📦").scrollTop()) / 667 + 1; // is a responsive enviroment window's height should not be fixed
					_transitionDurations["0.1"] = 0.1 * _timeFactor;
					_transitionDurations["0.225"] = 0.225 * _timeFactor;
					_transitionDurations["0.3"] = 0.3 * _timeFactor;

					var _classes = "active";

					var _css = {
						top: $("#📦").scrollTop(),
						transition:
							"top " +
							_transitionDurations["0.225"] +
							"s, width " +
							_transitionDurations["0.3"] +
							"s, height " +
							_transitionDurations["0.3"] +
							"s",
					};

					if ($("#📦").scrollTop() < _originalY) {
						_classes += " bounce";
						_css["animation-duration"] = _transitionDurations["0.3"] + "s";
					}

					$(this).addClass(_classes);
					$(this).css(_css);
					$(this)
						.find(".item-content")
						.css("transition-delay", _transitionDurations["0.3"] + "s");
				});

				// collapse item
				$("body").on("click", ".item .close", function () {
					$(this).siblings(".item-content").removeAttr("style");

					var _css = {
						top: _originalY,
						transition:
							"top " +
							_transitionDurations["0.225"] +
							"s, width " +
							_transitionDurations["0.1"] +
							"s, height " +
							_transitionDurations["0.1"] +
							"s",
						"animation-duration": _transitionDurations["0.225"] + "s",
					};
					$(".item.active")
						.removeClass("active")
						.addClass("collapsing")
						.css(_css);

					$("#📦").removeClass("noscroll");

					setTimeout(function () {
						$(".item.collapsing").removeClass("collapsing bounce").css({
							transition: "",
							"animation-duration": "",
						});
					}, _transitionDurations["0.3"] * 1000);
				});

				// touchstart mousedown animation
				$("body").on("touchstart mousedown", ".item:not(.active)", function () {
					$(this).addClass("start");
				});

				$("body").on("touchend mouseup", ".item:not(.active)", function () {
					$(this).removeClass("start");
				});
			});

			$(window).on("load", function () {
				// set items' initial position and container's height (should be called also on resize in a responsive enviroment)
				var _top = 32;
				$(".item").each(function (i, el) {
					$(el).css("top", _top);
					_top += $(el).outerHeight() + 16;
				});
				$(".cardContainer").css("height", _top + 16);
			});
		})(jQuery);

	return (
		<ul className='cardContainer'>
			{ card }
		</ul>
	);
}
// ==================== Render ====================//
