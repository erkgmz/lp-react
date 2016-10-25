import React from 'react';

import List from './List';

const SocialIcons = ({ icons }) => {
  return (
    <List
      items={icons}
      linkClass="" />
  );
};

SocialIcons.propTypes = {
  icons: React.PropTypes.array.isRequired
};

export default SocialIcons;
