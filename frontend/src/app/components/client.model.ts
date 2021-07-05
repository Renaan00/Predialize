export interface Clients {
    _id: string
    name: string
    image_src: string
    total_enterprises: string
    total_realties: string
}
export interface ClientName {
    _id?: string
    name?: string
    image_src?: string
    total_enterprises?: string
    total_realties?: string
}
export interface Totals {
    total_clients: string
    total_enterprises: string
    total_realties: string
}
export interface ClientId {
    _id: string
    name: string
    image_src: string
}
export interface ClientDetails {
    _id: string
    name: string
    image_src: string
}
export interface ClientDetailsTotals {
    total_enterprises: string
    total_realties: string
}
export interface ClientDetailsName {
    _id: string
    name: string
    image_src: string
    realties: string
}