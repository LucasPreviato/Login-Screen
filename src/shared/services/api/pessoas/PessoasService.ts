import { Environment } from "../../../environment";
import { Api } from "../axiosconfig";

interface IDetailPessoa{
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
const getAll = async (page=1, filter= '') : Promise<TPessoasComTotalCount | Error>=> {
    try {
        const urlRelative =`/colaboradores?_page=${page}&_limit=${Environment.ROWS_LIMIT}&nomeCompleto_like=${filter}`;
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

const getById = async (id :number) : Promise<IDetailPessoa | Error>=> {
    try {
        const {data} = await Api.get(`/colaboradores/${id}`)

        if (data){
            return data
        }
        return new Error("Erro ao consultar o registro.");
    } catch (error){
        console.error(error);

        return new Error((error as {message:string}).message || "Erro ao listar os registros");
    }
}

const create = async (dados : Omit<IDetailPessoa, "id">) : Promise<number | Error>=> {
    try {
        const {data} = await Api.post<IDetailPessoa>("/pessoas",dados)

        if (data){
            return data.id
        }
        return new Error("Erro ao criar o registro.");
    } catch (error){
        console.error(error);

        return new Error((error as {message:string}).message || "Erro ao criar o registros");
    }
}

const updateById = async (id : number, dados : IDetailPessoa) : Promise<void | Error>=> {
    try {
        await Api.put(`/colaboradores/${id}`,dados)
        }
     catch (error){
        console.error(error);

        return new Error((error as {message:string}).message || "Erro ao atualizar o registros");
    }
}

const deleteById = async (id : number) : Promise<void | Error>=> {
    try {
        await Api.delete(`/colaboradores/${id}`)
        }
     catch (error){
        console.error(error);

        return new Error((error as {message:string}).message || "Erro ao apagar o registros");
    }
}

export const PessoasService ={
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}