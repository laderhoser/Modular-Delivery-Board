  
  // Initialize Firebase


  var nameV;
  var dateV;
  var ndateV;
  var addyV;
  var cubeNumV;
  var briefV;
  var salesNameV;
  var hoursV;
  var furnV;




$(document).ready(function() {
  // page is ready
   // $('#date').datepicker({
   //      format: 'dd/mm/yyyy'
   //  });

  $('#calendar').fullCalendar({
      // calendar properties;
      // enable theme
theme: true,
// emphasizes business hours
businessHours: true,
// event dragging & resizing
editable: true,
eventLimit: true,

events:[
	{
		title: "1st Tops Delivery",
		date: "2017-04-27",
		addy: "123 Street St",
		cubeNum: "5",
		brief: "words of explination",
		salesName: "Alex",
		hours: "yes",
		furn: "yes"
	}
],
eventClick: function (event) {
	swal({
		title: event.title,
		html: true,
		text: "<p><span class='bold'>Delivery Address: </span>" + event.addy +
          "<p><span class='bold'>Number of Cubes: </span>" + event.cubeNum +
          "<p><span class='bold'>Salesperson: </span>" + event.salesName +
          "<p><span class='bold'>Furniture Involved: </span>" + event.furn +
          "<p><span class='bold'>Before or After Hours?: </span>" + event.hours + 
          "<p><span class='bold'>Brief Description: </span>" + event.brief + "<p>",
		allowOutsideClick:true
	})
},
// header
header: {
  left: 'prev,next today',
  center: 'title',
  right: 'month,agendaWeek,agendaDay'
},
  })
   var select = '';
    for (i=1;i<=100;i++){
        select += '<option val=' + i + '>' + i + '</option>';
    }
    $('#cubeNum').html(select);

    $('#submit').on("click", function (){

    	nameV = $('#name').val().trim();
    	dateV = $('#date').val();
    	ndateV = moment(dateV).format("YYYY-MM-DD");
    	addyV = $('#addy').val().trim();
    	cubeNumV = $('#cubeNum').val().trim();
    	briefV = $('#brief').val().trim();
    	salesNameV = $("#salesName").val().trim();
    	hoursV = $('#hours').val().trim();
    	furnV = $('#furn').val().trim();


var newDelivery = {
		title: nameV,
		date: ndateV,
		addy: addyV,
		cubeNum: cubeNumV,
		brief: briefV,
		salesName: salesNameV,
		hours: hoursV,
		furn: furnV
};

firebase.database().ref().push(newDelivery);

$('#name').val("")
$('#date').val("")
$('#addy').val("")
$('#cubeNum').val("")
$('#brief').val("")
$('#salesName').val("")
$('#hours').val("")
$('#furn').val("")




});

firebase.database().ref().on("child_added", function (childSnapshot){

console.log(childSnapshot.val());

addName = childSnapshot.val().title;
addDate = childSnapshot.val().date;
addAddy = childSnapshot.val().addy;
addCubeNum = childSnapshot.val().cubeNum;
addBrief = childSnapshot.val().brief;
addSalesName = childSnapshot.val().salesName;
addHours = childSnapshot.val().hours;
addfurn = childSnapshot.val().furn;

newDeliveryEvent = {
	title: addName,
	date: addDate,
	addy: addAddy,
	cubeNum: addCubeNum,
	brief: addBrief,
	salesName: addSalesName,
	hours: addHours,
	furn: addfurn
}

console.log(newDeliveryEvent);

$('#calendar').fullCalendar("renderEvent", newDeliveryEvent, true);


})

});


