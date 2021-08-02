import './header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1 className='title'>
          <div>Covid-19</div>
          <div>Dashboard</div>
        </h1>
        <i className='fas fa-viruses' />
      </div>
      <a
        href='https://github.com/odil-abdulloyev/covid19-dashboard'
        target='_blank'
        rel='noreferrer'
        className='github'
      >
        <i className='fab fa-github' />
      </a>
    </header>
  );
};
