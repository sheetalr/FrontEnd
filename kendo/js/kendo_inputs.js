		
	//Kendo UI Datepicker
	$(function() {
		// Initialize the Kendo DatePicker by calling the kendoDatePicker jQuery plugin
		$("#datepicker").kendoDatePicker();
	});

	//Kendo UI kendoAutoComplete
	$(function() {
	  $("#animal").kendoAutoComplete({ dataSource: [ "Ant", "Antilope", "Badger", "Beaver", "Bird" ] });
	});

	//Kendo UI kendoButton
	  $(function() {
		$("button").kendoButton().css("color", "red");
	  });
	
	//Kendo UI Grid
	$(function(){
		$("#grid").kendoGrid({
  height: 200,
  columns:[
      {
          field: "FirstName",
          title: "First Name"
      },
      {
          field: "LastName",
          title: "Last Name"
      },
      {
          field: "MobNo",
          title: "Mobile Number"
      }
  ],
  dataSource: {
      data: [
          {
              FirstName: "John",
              LastName: "Doe",
			  MobNo: "8600383937"
          },
          {
              FirstName: "Jane",
              LastName: "Doe",
			  MobNo: "8600383937"
          },
		  {
              FirstName: "Prasanna",
              LastName: "Kapate",
			  MobNo: "8600383937"
          }
      ]
  }
});
	
	});
	
     