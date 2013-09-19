Template.cities.cities = function() {
	return Cities.find({region: Session.get("currentRegion")}, {sort: {name: 1}});
};

Template.regions.events({
	'click .btn': function(e, t) {
		Session.set("currentRegion", $(e.target).find('input').attr('id'))
	}
});
// $(function() {
// 	$('.btn').click(function() {
// 		console.log($(this).find('input').attr('id'));
// 	});
// });
