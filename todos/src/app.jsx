var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://thesetodos.firebaseio.com/';

var App = React.createClass({
	mixins: [ReactFire],
	componentWillMount: function () {
		this.bindAsObject(new FireBase(rootUrl + 'items/'), 'items');
		// this.state.items => {}
	},
  render: function() {
    return <div className="row panel panel-default">
			<div className="col-md-8 col-md-offset-2">
				<h2 className="text-center">
					To-Do List
				</h2>
				<Header itemsStore={this.firebaseRefs.items} />
			</div>
		</div>
	}
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
