function init() {

var Territory = Backbone.Model.extend({});

var Territories = Backbone.PageableCollection.extend({
  model: Territory,
  url: "backgrid/examples/pageable-territories.json",
  state: {
    pageSize: 10 
  },
  mode: "client"
});

var territories = new Territories();

var columns = [{
  name: "id", // The key of the model attribute
  label: "ID", // The name to display in the header
  editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
  // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
  cell: Backgrid.IntegerCell.extend({
    orderSeparator: ''
  })
}, {
  name: "name",
  label: "Name",
  // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
  cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
}, {
  name: "pop",
  label: "Population",
  cell: "integer" // An integer cell is a number cell that displays humanized integers
}, {
  name: "percentage",
  label: "% of World Population",
  cell: "number" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
}, {
  name: "date",
  label: "Date",
  cell: "date",
}, {
  name: "url",
  label: "URL",
  cell: "uri" // Renders the value in an HTML <a> element
}];

// Initialize a new Grid instance
var grid = new Backgrid.Grid({
  columns: columns,
  collection: territories,
  footer: Backgrid.Extension.Infinator
//  footer: Backgrid.Extension.Paginator
});

// Render the grid and attach the root to your HTML document
$("#example-1-result").append(grid.render().$el);

// Fetch some countries from the url
territories.fetch();
};
