import { Outlet, redirect, useNavigate } from "react-router";
import { Layout, Menu, MenuProps } from 'antd';
import { useContext, useState } from "react";
import {
    BarChartOutlined,
    DatabaseOutlined,
    EditOutlined,
    SnippetsOutlined,
} from '@ant-design/icons';
import { ThemeContext } from "../../ThemeProvider";


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    onClick: () => void,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        onClick,
        children,
        label,
    } as MenuItem;
}



const Admin: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    const items: MenuItem[] = [
        getItem('Бронирование', '1', () => { navigate('/admin') }, <SnippetsOutlined />),
        getItem('Правила', '2', () => { navigate('/admin/rules') }, <EditOutlined />),
        getItem('Данные', '3', () => { navigate('/admin/data') }, <DatabaseOutlined />),
        getItem('Статистика', '4', () => { navigate('/admin/statistics') }, <BarChartOutlined />)
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme={theme.theme} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme={theme.theme} defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

            <Layout>
                <Outlet />
            </Layout>
        </Layout>
    )
}


export default Admin;