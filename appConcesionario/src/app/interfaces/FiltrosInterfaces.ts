
interface IPrecio {
    min: number;
    max: number;
}

export interface IFiltrosVehiculos {
 //   precio?: IPrecio;
    categorias: string[];
    precios?: number[];
}
