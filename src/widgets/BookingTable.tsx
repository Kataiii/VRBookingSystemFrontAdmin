import { Table } from "antd";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";

const BookingTable: React.FC = observer(() => {
    const { rooms } = useContext(Context);

    useEffect(() => {
        console.log('FFFFFFFFFFFFFFFFFF');
        // const responce = rooms.getRooms();
        // responce.then((responce) => {
        //     console.log(rooms.notOccupiedRooms);
        // })
    }, [])

    return(
        <div></div>
        // <Table columns={columns} dataSource={data} bordered />
    )
})

export default BookingTable;