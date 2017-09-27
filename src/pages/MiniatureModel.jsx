import React, { Component } from 'react';

import StatusPanel from '../MacroComponent/StatusPanel.jsx';

class MiniatureModel extends Component {
  render(props) {
    const rPages = [ { pName:'Gallery', pVal:'modGal'},
          { pName:'Summary', pVal:'modsummaryP'},
          { pName:'Commissions and Quotes', pVal:'ComQuote'}
    ];

    return (
      <div>
        <StatusPanel
          navPages={rPages}
          uName='Adam Wayne Lew'
          uJob='Miniature Scale Modeler and Painter'
          />
      </div>
    );
  }
}

export default MiniatureModel;
