// import {Menu} from "antd"; 
import { Sidebar, Menu,MenuItem, SubMenu , Input} from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Navbar(){
    const items = [
        {label:<Link to="/"><Button type="text">Home</Button></Link>},
        {label:<Link to="/about"><Button type="text">About</Button></Link>},
        {label:<Link to="/information"><Button type="text">Information</Button></Link>},
    ]
    return(
        <>
            <Menu style={{backgroundColor:'#33FFEC'}} mode="horizontal"  items={items}/>
        </>
    )
}

export default Navbar;