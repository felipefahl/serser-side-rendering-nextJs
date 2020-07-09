import React from 'react';
import axios from 'axios';

import withAnalytics from '~/hoc/withAnalytics';

const UserDetail = ({user}) => {
    return(
    <div>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} alt={user.name}/>
    </div>
    );
}

UserDetail.getInitialProps = async ({query}) => {
    const response = await axios.get(`https://api.github.com/users/${query.user}`);

    return {user: response.data};
};

export default withAnalytics()(UserDetail);