import React from 'react';
import shortid from 'shortid';
import President from '../President/President';

const PresidentsContainer = props => {
  const presidents = props.data.map(pres => {
    return <President key={shortid.generate()} data={pres} />
  })
  return (
    <section className="PresidentsContainer">
      {presidents}
    </section>
  );
};

export default PresidentsContainer;