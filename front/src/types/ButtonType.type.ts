export type ButtonType = {
    style: string,
    name: string,
    linkTo?: string | null,
}

export interface ICard {
    id: number,
    title: string,
    description: string,
    image: string,
}