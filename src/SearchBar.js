import React, { Component } from 'react';
class SearchBar extends Component {

	handleClick = (e) => {
		e.preventDefault();
		const pName = this.refs.playername.value
		this.props.onSearch(pName);
	}
	render() {
		return (
			<div class="row">
			    <form class="col s12" ref={(ref) => this.formRef = ref}>
			      <div class="row">
			        <div class="input-field col s12">
			          <textarea id="textarea1" class="materialize-textarea" ref="playername"></textarea>
			          <label for="textarea1">Enter Your Player Name</label>
			        </div>
			        <div class = "col s12 center">
						<a class="waves-effect waves-light btn" onClick = {this.handleClick}>Find...</a>
			        </div>
			      </div>
			    </form>
			</div>
		)
	}
}

export default SearchBar