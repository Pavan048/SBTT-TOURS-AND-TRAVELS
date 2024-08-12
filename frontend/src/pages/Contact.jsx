import React from 'react';
import ContactImage from "../assets/images/contact-banner.jpeg";
import SubHero from '../components/SubHero/SubHero';

const styles = {
  container: {
    borderRadius: '5px',
    backgroundColor: '#f2f2f2',
    padding: '10px',
  },
  textCenter: {
    textAlign: 'center',
  },
  column: {
    float: 'left',
    width: '50%',
    marginTop: '6px',
    padding: '20px',
  },
  row: {
    content: '',
    display: 'table',
    clear: 'both',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    marginTop: '6px',
    marginBottom: '16px',
    resize: 'vertical',
  },
  submit: {
    backgroundColor: '#04AA6D',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  submitHover: {
    backgroundColor: '#45a049',
  },
  img: {
    width: '100%',
  },
};

const Contact = () => {
  return (
    <>
        <SubHero 
    imageUrl="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    heading="_Contact us_"
    subheading="Swing by for a cup of coffee, or leave us a message:"
    />
      <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.textCenter}>
       
        </div>
        <div style={styles.row}>
          <div style={styles.column}>
            <img src={ContactImage} alt="Map" style={styles.img} />
          </div>
          <div style={styles.column}>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." style={styles.input} />
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={styles.input} />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email.." style={styles.input} />
              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{ ...styles.input, height: '170px' }}></textarea>
              <input type="submit" value="Submit" style={styles.submit} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.submitHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.submit.backgroundColor} />
            </form>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Contact;

