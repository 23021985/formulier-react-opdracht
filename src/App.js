import React from 'react';
import './App.css';

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [submitted, setSubmitted] = React.useState('');
    const [numberValue, setNumberValue] = React.useState('');
    const [chosen, setChosen] = React.useState('');
    //const [checkedTerms, toggleCheckedTerms] = React.useState(false);


    function sendForm(e) {
        e.preventDefault();
        console.log( {messageValue},{numberValue}, {submitted}, {chosen},  ' Het bericht is succesvol verzonden.');
        //setSubmitted(true);
    }


  return (
      <>

    <div>
        <form onSubmit={sendForm}>
            <fieldset>
                <legend>Gegevens</legend>
                Naam:
                <label htmlFor="form-message">
                <input
                    type="text"
                    placeholder="naam"
                    name="name"
                    className={messageValue.length > 20 ? 'input-error' : ''}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
                </label>
    <br/>
                Leeftijd:
                <label htmlFor="form-age">
                <input
                    type="number"
                    placeholder="0"
                    name="AgeInput"
                    className={numberValue.length < 3 ? 'input-error' : ''}
                    value={numberValue}
                    onChange={(event => setNumberValue(event.target.value))}
                />
                </label>
            </fieldset>
        </form>
     <br/>
        <form>
            <fieldset>
                <legend>Jouw review</legend>
                Hoe heb je dit recept gevonden? <br/>
                <select
                    name="gevonden"
                    id="gevonden"
                    value={chosen}
                    onChange={(event => setChosen(event.target.value))}>

                    <option value="Google">Google</option>
                    <option value="Vriend">Vriend</option>
                    <option value="Advertentie">Advertentie</option>
                    <option value="Anders">Anders</option>
                </select>
     <br/>
     <br/>
                Opmerkingen:
     <br/>
                <textarea name="textField"
                          placeholder="Wat vond je van het recept?"
                          cols="60"
                          rows="8"
                          value={submitted}
                          onChange={(event) => setSubmitted(event.target.value)}

                ></textarea>
     <br/>
     <br/>
                <button type={"submit"}
                disabled={!submitted}
                onClick={sendForm}
                >Versturen</button>

            </fieldset>

        </form>
    </div>

          </>
  );
}

export default App;
