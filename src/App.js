import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addReminder,deleteReminder,clearReminder} from './actions';
import {findDOMNode} from 'react-dom';

class App extends Component{

	constructor(props){
		super(props);
		this.state={ text :'' };
	}

	addReminder(){
			this.props.addReminder(findDOMNode(this.refs.txtReminder).value)
	}

	deleteReminder1(id){
			console.log(id);
			this.props.deleteReminder(id);
	}

	renderReminders() {
     const { reminders } = this.props;
     return (
       <ul className="list-group col-sm-4 btt">
         {
           reminders.map(reminder => {
             return (
               <li key={reminder.id} className="list-group-item">
                 <div className="list-item">
                   <div>{reminder.text}</div>
                 </div>
                 <div
                   className="list-item delete-button"
                   onClick={() => this.deleteReminder1(reminder.id)}
                 >
                   &#x2715;
                 </div>
               </li>
             )
           })
         }
       </ul>
     )
   }

	render(){
		console.log(this.props.reminders);
		return (
			<div className="App">
				<div className="title">
					Reminder App
				</div>
				<div className="form-group">
					<input className="form-control" ref='txtReminder' placeholder="i want to do"  />
					<input 
              className="form-control"
              type="datetime-local"
            />
				</div>
			<div>

				<button className="btn btn-success" type="button" onClick={()=> this.addReminder()}>Add to Reminder</button>
				<button className="btn btn-danger delete-button" type="button" onClick={()=> this.props.clearReminder()}>Clear Reminder</button>
			</div>

					{this.renderReminders()}

			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		reminders:state
	}

}



export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminder})(App);
