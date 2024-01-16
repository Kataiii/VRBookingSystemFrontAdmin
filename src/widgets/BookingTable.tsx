import { Table } from "antd";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";

const BookingTable: React.FC = observer(() => {
    const { store, rooms } = useContext(Context);

    useEffect(() => {
        const responce = rooms.getRooms(store.access);
        responce.then((responce) => {
        })
    }, [])

    return(
        <div></div>
        // <Table columns={columns} dataSource={data} bordered />
    )
})

export default BookingTable;