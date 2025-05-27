export interface Provider{
    id: string;
    name: string;
    address: string;
    description: string;
    shopName?: string;
}

export const providers: Provider[] = [
    {
        id: '1',
        name: 'Apple',
        address: 'Calle Amarguillo',
        description: 'Proveedor de productos de Apple',
    },
    {
        id: '2',
        name: 'Samsung',
        address: 'Calle Héroe de Sostoa',
        description: 'Proveedor de productos de Samsung',
        shopName: 'Samsung Store'
    }
];