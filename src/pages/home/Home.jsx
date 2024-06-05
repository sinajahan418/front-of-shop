import React from 'react';
import CategoryList from '../../components/index/CategoryList/CategoryList';
import EarpodCategory from '../../components/index/earpodCategory/EarpodCategory';

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <EarpodCategory category={"Refrigerator"} header={"tops Refrigerator:"}/>
      <EarpodCategory category={"Watches"} header={"tops Watches:"}/>
      <EarpodCategory category={"Speakers"}/>
    </div>
  );
}

export default Home;
