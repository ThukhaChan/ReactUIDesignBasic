import React from 'react'
import { Dropdown,Button,Tooltip, FloatButton } from 'antd'
import {SearchOutlined,PoweroffOutlined,QuestionCircleOutlined} from '@ant-design/icons'

export default function AntD() {
  return (
    <div>
     <Button type='dashed' size='12px'>Download</Button>
     <Button type="primary" size='50px' shape='circle'>Click Me</Button>
     <Button type="primary" size='10px' shape='round'>Click Me</Button>
     <Button type='default' size='12px' loading icon={<PoweroffOutlined />}>Download</Button>
     <Button type="primary" loading />
     <FloatButton type='primary' >Thu</FloatButton>

     <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button>Second</Button>
      {/* <Dropdown.Button> First</Dropdown.Button> */}
      
    
    </div>
  )
}
