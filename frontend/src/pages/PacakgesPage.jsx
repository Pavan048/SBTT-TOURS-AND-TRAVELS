import React from 'react';
import SubHero from '../components/SubHero/SubHero';
import useFetch from '../Hooks/useFetch';
import PackageCard from '../components/Packages/PackageCard';


const PackagesPage = () => {
  const { data, error, loading } = useFetch('http://localhost:4000/api/tours/packages');

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
    <>
      <SubHero 
        imageUrl="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="_Our Packages_"
        subheading="It's always worthyyy...!"
      />

      <section className="package" id="package">
        <div className="container">
        
          <ul className="package-list">
            {data.data.map(pkg => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </ul>
        
        </div>
      </section>
    </>
  );
};

export default PackagesPage;
