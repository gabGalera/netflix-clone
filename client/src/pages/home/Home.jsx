import './home.scss';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? `?type=${type}` : ''}${genre ? `&genre=${genre}` : ''}`, {
          headers: {
            token:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc0NmI5YmQ4ZTE0Nzg4MzZlYzQyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDMyNDM4NywiZXhwIjoxNjc0NzU2Mzg3fQ.OWm_vcAK4x9PU_eAMynyTAC2GQq8q8YkOTFfCyTPFC8',
          },
        });
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
      <List />
    </div>
  );
}

Home.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Home;
