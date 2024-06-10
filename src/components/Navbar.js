// import {Menu} from "antd"; 
import { Sidebar, Menu,MenuItem, SubMenu , Input} from 'antd';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const items = [
        {label:'Home'},
        {label:'About'},
        {label:'Information'},
    ]
    return(
        <>
            <Menu style={{backgroundColor:'#33FFEC'}} mode="horizontal"  items={items}/>
        </>
    )
}

export default Navbar;