import {Button,Input} from 'antd';

const Records_new = () => {
    return(
        <div style={{textAlign: "center"}}>
            New Record
            <Button>ลูกค้าเก่า</Button><br/>
            <Button>ลูกค้าใหม่</Button><br/>
            <div>
            <Input size="large" placeholder="Input Area Width" />
            <Input size="large" placeholder="Input Area Height" />
            </div>
        </div>
    )
}

export default Records_new ;