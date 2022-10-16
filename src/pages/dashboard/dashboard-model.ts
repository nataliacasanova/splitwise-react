import { GroupModel } from "../../components/group/group.model";


export const BILLS: GroupModel[] = [{
    name: 'Cafeteria',
    transactions: [{
        description: '',
        amount: '1.95',
        title: 'Bollo de chocolate',
        date: '12/10/2021',
        person: 'Natalia'
    },
    {
        description: '',
        amount: '1.10',
        title: 'Café',
        date: '12/05/2021',
        person: 'Natalia'
    }]
},
{
    name: 'Supermercado',
    transactions: [{
        description: '',
        amount: '30',
        title: 'Compra lunes',
        date: '12/10/2021',
        person: 'Natalia'
    }]
}
];
