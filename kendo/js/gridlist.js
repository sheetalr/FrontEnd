//kendo UI listView
   
$(document).ready(function() {
      $("#listView").kendoListView({
         selectable: true,
         navigatable: true,
         editable: true,
         template: "<li>${FirstName}</li>",
         editTemplate: '<li><input type="text" data-bind="value:FirstName" name="FirstName" required="required"/></li>'
      });
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
	
     