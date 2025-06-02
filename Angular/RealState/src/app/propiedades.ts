export interface Propiedades {
	id: number;
	alarmas: boolean;
	camaras: boolean;
	puertasReforzadas: boolean;
	detectoresHumo: boolean;
	status: string; 
}

export const propiedades: Propiedades[] = [
	{
		id: 1,
		alarmas: true,
		camaras: true,
		puertasReforzadas: true,
		detectoresHumo: true,
		status: 'disponible'
	},
	{
		id: 2,
		alarmas: false,
		camaras: true,
		puertasReforzadas: false,
		detectoresHumo: true,
		status: 'reservado'
	},
	{
		id: 3,
		alarmas: true,
		camaras: false,
		puertasReforzadas: true,
		detectoresHumo: false,
		status: 'vendido'
	},
	{
		id: 4,
		alarmas: false,
		camaras: false,
		puertasReforzadas: false,
		detectoresHumo: true,
		status: 'alquilado'
	},
]
