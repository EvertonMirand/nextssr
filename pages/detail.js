import React from 'react';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalitycs';

const User = ({ user }) => (
  <div>
    <h1>User: {user.login}</h1>
    <img src={user.avatar_url} width="200" alt="Avatar" />
  </div>
);

User.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(User);
