import React, { Component } from 'react';
import '../style/css/bootstrap.min.css';
import { sampleText } from '../sampleText'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

            <div className="col-sm-6">

                <textarea rows="35" value={sampleText} className="form-control"></textarea>

            </div>
            <div className="col-sm-6">

                <h2>Résultat</h2>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
