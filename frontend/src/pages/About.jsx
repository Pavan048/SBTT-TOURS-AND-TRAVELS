import React from 'react';
import "../assets/css/About.css";
import SubHero from '../components/SubHero/SubHero';


const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'CEO & Founder',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'jane@example.com',
    imageUrl: 'https://media.istockphoto.com/id/1369101429/photo/young-businessman-stock-photo.jpg?s=2048x2048&w=is&k=20&c=4ld6PaX1BC1B5--ZJ3jehQCvto21HXzlPCQzju80ZOI='
  },
  {
    name: 'Mike Ross',
    title: 'Art Director',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'mike@example.com',
    imageUrl: 'https://media.istockphoto.com/id/1369101429/photo/young-businessman-stock-photo.jpg?s=2048x2048&w=is&k=20&c=4ld6PaX1BC1B5--ZJ3jehQCvto21HXzlPCQzju80ZOI='
  },
  {
    name: 'John Doe',
    title: 'Designer',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'john@example.com',
    imageUrl: 'https://media.istockphoto.com/id/1369101429/photo/young-businessman-stock-photo.jpg?s=2048x2048&w=is&k=20&c=4ld6PaX1BC1B5--ZJ3jehQCvto21HXzlPCQzju80ZOI='
  }
];

const About = () => {
  return (
    <>
    <SubHero 
    imageUrl="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    heading="_About Us_"
    subheading="Feel free to reach...!"
    />
    <div className="about-section">
    <br/>
    <h2 style={{ textAlign: 'center' }}>Our Team</h2>
    <div className="row">
      {teamMembers.map((member, index) => (
        <div className="column" key={index}>
          <div className="card">
            <img src={member.imageUrl} alt={member.name} style={{ width: '100%' }} />
            <div className="container">
              <h2>{member.name}</h2>
              <p className="title">{member.title}</p>
              <p>{member.description}</p>
              <p>{member.email}</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </>
  
  );
};

export default About;
