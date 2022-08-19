import { Environment } from "../../../environment";
import { Api } from "../axiosconfig";

interface IDatailPessoa{
    id: number;
    email : string;
    nomeCompleto: string;
    cidadeId: number;

}
interface IListingPessoa{
    id: number;
    email : string;
    nomeCompleto: string;
    cidadeId: number;
}

type TPessoasComTotalCount = {
    data : IListingPessoa [];
    totalCount : number;
}
const getAll = async (page =1, filter = '') : Promise<TPessoasComTotalCount | Error>=> {
    try {
        const urlRelative =`/pessoal?_page=${page}&_limit=${Environment.ROWS_LIMIT}&nomeCompleto_like=${filter}`;
        const {data, headers} = await Api.get(urlRelative)

        if (data){
            return {
                data,
                totalCount: Number(headers["x-total-count"] || Environment.ROWS_LIMIT),
            };
        }
        return new Error("Erro ao listar os registros");
    } catch (error){
        console.error(error);

        return new Error((error as {message:string}).message || "Erro ao listar os registros");
    }
};

const getById = async () : Promise<any>=> {
}

const create = async () : Promise<any>=> {
}

const updateById = async () : Promise<any>=> {
}

const deleteById = async () : Promise<any>=> {
    
}

export const PessoasService ={
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}