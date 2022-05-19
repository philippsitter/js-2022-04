import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <dt>Obst & Gemüse
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Brokkoli</label></dd>
        <dt >Getreideprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Reis</label></dd>
        <dt >Milchprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <ArtikelTag/>
      </React.Fragment>
    )
  }
}

export default GruppenTag
