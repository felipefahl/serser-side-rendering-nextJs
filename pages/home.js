import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hoc/withAnalytics';
import styled from 'styled-components';

const Title = styled.h1`
    color: #5858aa;
    font-size: 40px;
`;

const Home = ({title}) => {
    return(
    <div>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <img src="/static/images.png" alt="It's Time" width="200"/>
        <Title>Hello world</Title>
        <Link href='/users'>
            <a>Users</a>
        </Link>
    </div>
    );
}

Home.getInitialProps = async () => {
    return {title: "Home"};
};


export default withAnalytics()(Home);