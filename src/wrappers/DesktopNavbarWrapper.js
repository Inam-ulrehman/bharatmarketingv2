import styled from 'styled-components'

const DesktopNavbarWrapper = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    background-color: var(--primary-1);
  }
  .navbar {
    ul {
      display: flex;
      a {
        padding: 1rem 0.2rem;
        text-align: center;
        transition: var(--transition);
        border-radius: var(--radius);
        color: var(--primary-8);
        :hover {
          background-color: var(--primary-5);
          color: var(--white);
        }
      }
    }
  }

  .icon {
    width: 30px;
  }
  .social-icons {
    width: 200px;
    ul {
      display: flex;
      gap: 1rem;
      text-align: center;
    }
  }
  .logo-container {
    width: 200px;
  }
  .logo {
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }
  .active {
    background-color: var(--primary-5);
    color: var(--white);
  }
  .nav-container {
    height: 60px;
  }
`
export default DesktopNavbarWrapper
