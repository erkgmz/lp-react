import React from 'react';

import List from './List';

const SocialIcons = ({ icons }) => {
  return (
    <List
      items={icons}
      listClass="col-xs-6"
      itemClass="col-xs-2"
      linkClass="" />
  );
};

SocialIcons.propTypes = {
  icons: React.PropTypes.array.isRequired
};

export default SocialIcons;
