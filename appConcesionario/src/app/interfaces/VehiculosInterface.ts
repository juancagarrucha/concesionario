export interface IVehiculo {
    id?: number;
    nombre?: string;
    marca?: string;
    Categoria?: ICategoria;
    img?: string;
    precio?: number;
}
export interface ICategoria {
    nombre: string;
    Descripcion: string;
    img: string;
    vehiculos?: IVehiculo
}

type GGamas = ICategoria | ICategoria;
export interface MsnApiCategorias {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: ICategoria;
//    data?: G;
}
export interface MsnApiAgregarc {
    status?: string;
    message?: string;
    errors?: string;
    data?: ICategoria;
//    data?: G;
}
export interface MsnApiVehiculos {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
//    data?: IGama[] | IProducto[];
    data?: IVehiculo | IVehiculo | ICategoria | ICategoria;
}


