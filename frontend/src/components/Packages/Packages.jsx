import React from 'react';
import useFetch from '../../Hooks/useFetch';
import SectionHeading from './SectionHeading';
import PackageCard from './PackageCard';
import ViewAllButton from './ViewAllButton';

const PackageSection = () => {
  const { data, error, loading } = useFetch('https://sbtt-tours-and-travels.onrender.com/api/tours/packages');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || 'Something went wrong'}</div>;
  }

  if (!data || data.data.length === 0) {
    return <div>No packages available at the moment.</div>;
  }

  return (
    <section className="package" id="package">
      <div className="container">
        <SectionHeading />
        <ul className="package-list">
          {data.data.map(pkg => (
            <PackageCard key={pkg._id} pkg={pkg} />
          ))}
        </ul>
        <ViewAllButton />
      </div>
    </section>
  );
};

export default PackageSection;
