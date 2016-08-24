var Brewery = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  handleToggle: function(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },

  handleDelete: function(e) {
    $.ajax({
      method: 'DELETE',
      url: '/brewerys/' + this.props.brewery.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteBrewery(this.props.brewery)
      }.bind(this)
    });
  },

  handleEdit: function(e) {
    e.preventDefault();
    var data = { title: React.findDOMNode(this.refs.title).value,
                 date: React.findDOMNode(this.refs.date).value,
                 amount: React.findDOMNode(this.refs.amount).value }
    $.ajax({
      method: 'PUT',
      url: '/brewerys/' + this.props.brewery.id,
      dataType: 'JSON',
      data: { brewery: data },
      success: function(data) {
        this.setState({ edit: false });
        this.props.handleEditBrewery(this.props.brewery, data);
      }.bind(this)
    });
  },

  breweryRow: function() {
    return(
      <tr>
        <td>{this.props.brewery.name}</td>
        <td>{this.props.brewery.city}</td>
        <td>{this.props.brewery.state}</td>
        <td>
          <a className='btn btn-default' onClick={this.handleToggle}>
            Edit
          </a>
          <a className='btn btn-danger' onClick={this.handleDelete}>
            Delete
          </a>
        </td>
      </tr>
    );
  },

  breweryForm: function() {
    return(
      <tr>
        <td>
          <input className='form-control' type='text'
                 defaultValue={this.props.brewery.date} ref='date'>
          </input>
        </td>
        <td>
          <input className='form-control' type='text'
                 defaultValue={this.props.brewery.title} ref='title'>
          </input>
        </td>
        <td>
          <input className='form-control' type='number'
                 defaultValue={this.props.brewery.amount} ref='amount'>
          </input>
        </td>
        <td>
          <a className='btn btn-default' onClick={this.handleEdit}>
            Update
          </a>
          <a className='btn btn-danger' onClick={this.handleToggle}>
            Cancel
          </a>
        </td>
      </tr>
    );
  },

  renderedBrewery: function() {
    if (this.state.edit === true) {
      return this.breweryForm();
    } else {
      return this.breweryRow();
    }
  },

  render: function() {
    return this.renderedBrewery();
  }
});
