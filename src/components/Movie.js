import React, {Component} from 'react';
import '../css/Movie.css';

class Note extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card-group col-sm-4">
        <div className="card card-view mt-0">
        <img src="{this.image}" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title h-20">{this.props.title}</h5> {/*Movie Title*/}
            <p ClassName="card-text" h-50>{this.props.description}</p> {/*Movie Description*/}
            <ul class="list-group list-group-flush">
               <li class="list-group-item h-10">Year: {this.props.year}</li> {/*Year of production*/}
               <li class="list-group-item h-10">{this.props.genre}</li> {/*Genre*/}
            </ul>
            
            <div class="card-body h-10">
              <button className="btn btn-info mr-1 p-1">Edit</button>
              <button className="btn btn-danger mr-1 p-1">Delete</button>
              <button className="btn btn-primary p-1">Preview</button>
            </div>         
          </div>
        </div>
      </div>
    );
  }
}

export default Note;

