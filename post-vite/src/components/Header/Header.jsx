import React from 'react';
import { Avatar, Space } from 'antd';



const Header = () => {
    return (
        <Space direction="vertical" size={16} >
            <Space wrap size={16}>
                <Avatar size={88} src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />
                <h1>Gustavo</h1>

            </Space>

        </Space>
    );
}

export default Header;