import styled from 'styled-components';
import oceanImage from './assets/ocean.jpg';

// A high-end styled container for the login page
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  min-height: 100vh; /* Ensure full height */
  padding-bottom: 100px; /* Leave space for the footer */
  background-image: url(${oceanImage.src}); /* Your background image */
  background-size: cover;
  background-position: center;
`;

// Add a wrapper for the form to enhance aesthetics
const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9); /* Light background for form */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 2; /* Above the dark overlay */
  width: 400px; /* Set a max width for the form */
  
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem; /* Larger font size for the heading */
    text-align: center; /* Center align the heading */
    color: #333; /* Darker text for better readability */
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff; /* Primary color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3; /* Darker shade on hover */
    }
  }

  p {
    color: red; /* Error message color */
    text-align: center; /* Center align error message */
  }
`;

export { StyledContainer, FormWrapper };
