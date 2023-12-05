import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Publications = () => (
  <Main
    title="publications"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2>
            <Link to="/publications">Publications</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Publications;
