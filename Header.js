
import './Header.css';

function Header(props) {
  return (
    <header>
        <div className={`header-cell ${props.tab === 1 ? '' : 'inactive-header-cell' }`} onClick={() => props.changeTab(1)}>

        </div>
        <div className={`header-cell ${props.tab === 2 ? '' : 'inactive-header-cell' }`}  onClick={() => props.changeTab(2)}>

        </div>
        

        

    </header>
  );
}

export default Header;
