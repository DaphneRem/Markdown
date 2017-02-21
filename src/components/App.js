import React, { Component } from 'react';
// CSS
import '../style/css/bootstrap.min.css';
// JS perso
import { sampleText } from '../sampleText'
// IMPORTATION DE LIB EXTERNE : marked
// npm install marked --save
import marked from 'marked';

class App extends Component {

// STATE
    state = {
        text : sampleText
    };

// FUNCTIONS PERSOS

    editText = (event) => {
        const text = event.target.value;
        this.setState({text});
        // Quand key à le mm orthographe que la value, avec ES6 on peut ne l'écrire qu'une seule fois ({text : text} devient {text})
    };

    renderText= (text) => {
		const renderText = marked(text, {sanitize: true});
		// On place le rendu dans un objet pour se souvenir que c'est dangereux d'insérer du code dans le DOM.
		return { __html: renderText };
	}

  render() {
    return (
      <div className="container">
        <div className="row">

            <div className="col-sm-6">

                <textarea
                    rows="35"
                    value={this.state.text}
                    className="form-control"
                    onChange={(e) => this.editText(e)}>
                </textarea>

            </div>
            <div className="col-sm-6">

                <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />


            </div>
        </div>
      </div>
    );
  }
}

export default App;

// dangerouslySetInnerHTML : react précise que ces données viennent de l'utilisateur
// On auto-ferme cette div dangerouslySetInnerHTML car elle ne peut pas avoir d'enfants (cela enlève le msg d'erreur de notre console)
