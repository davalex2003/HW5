export interface FurnitureModel {
    _id: string,
    size: string,
    material: string,
    color: {
        name: string,
        HEX: string
    },
    quantity: number,
    description?: string,
    image: string
}