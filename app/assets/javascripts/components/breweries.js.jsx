var Breweries = React.createClass({
  getInitialState: function() {
    return { breweries: this.props.data };
  },

  getDefaultProps: function() {
    return { breweries: [] };
  },

  addBrewery: function(brewery) {
    var breweries = React.addons.update(this.state.breweries, { $push: [brewery] })
    this.setState({ breweries: breweries });
  },

  deleteBrewery: function(brewery) {
    var index = this.state.breweries.indexOf(brewery);
    var breweries = React.addons.update(this.state.breweries,
                                      { $splice: [[index, 1]] });
    this.replaceState({ breweries: breweries});
  },

  updateBrewery: function(brewery, data) {
    var index = this.state.breweries.indexOf(brewery);
    var breweries = React.addons.update(this.state.breweries,
                                      { $splice: [[index, 1, data]] });
    this.replaceState({ breweries: breweries });
  },

  render: function() {
    return(
      <div className='breweries'>
        <h2 className='title'>
          Breweries
        </h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.breweries.map(function(brewery) {
              return <Brewery key={brewery.id} brewery={brewery}
                             handleDeleteBrewery={this.deleteBrewery}
                             handleEditBrewery={this.updateBrewery} />
             }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
});
