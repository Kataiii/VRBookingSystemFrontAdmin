import { Table, TableProps } from "antd";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "..";
import IRoom from "../enemy/Room";
import LoadingPage from "../pages/LoadingPage";

interface DataType {
    key: string;
    name: string
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown'
    },
    {
        key: '2',
        name: 'Jim Green'
    },
    {
        key: '3',
        name: 'Joe Black'
    },
    {
        key: '4',
        name: 'Jim Red'
    },
    {
        key: '5',
        name: 'Jake White'
    },
];

const BookingTable: React.FC = observer(() => {
    const { store, rooms } = useContext(Context);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const cols = useMemo<TableProps<DataType>['columns']>(() => [
        {
            title: 'Время',
            dataIndex: 'time',
            rowScope: 'row',
        },
        ...rooms.allRooms.map(room => ({
            title: room.name,
            dataIndex: room.id,
            render: (text: string) => <p>{text}</p>
        }))
    ], [rooms.allRooms]);

    useEffect(() => {
        const responce = rooms.getRooms(store.access);
        responce.then((_) =>  setIsLoading(false));
    }, []);

    return (
        isLoading
            ? <LoadingPage />
            : <Table columns={cols} dataSource={data} bordered />
    )
});

export default BookingTable;