import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import drawMap from 'lib/map/drawMap';
import VacationModal from './VacationModal';
import cloneDeep from 'lodash/cloneDeep';
import { connect } from 'react-redux';

function Map({ vacations }) {
  const [openVacationId, setOpenVacationId] = useState(null);

  useEffect(() => {
    const map = drawMap(vacations, setOpenVacationId);
    return () => map.dispose();
  }, []);

  return (
    <React.Fragment>
      <div id="chartdiv" />
      {openVacationId && (
        <VacationModal
          vacation={vacations.find((v) => v.id === openVacationId)}
          onRequestClose={() => setOpenVacationId(null)}
        />
      )}
    </React.Fragment>
  );
}

export default connect(
  ({ vacations }) => ({ vacations }),
  () => ({})
)(Map);
