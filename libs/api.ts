import { Recipy as RecipyType, RecipyResponse, } from "@/types/Recipy";

const responseResolver = async <T>(URI: string): Promise<T | undefined> => {
    try {
        const response = await fetch(URI);
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

class Api {
    baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    async getAll(limit?: number): Promise<RecipyResponse | undefined> {
        return await responseResolver<RecipyResponse>(`${this.baseUrl + (limit ? `?limit=${limit}` : '')}`)
    }

    async getById(id: number): Promise<RecipyType | undefined> {
        return await responseResolver<RecipyType>(this.baseUrl + id)
    }

    async getByTag(tag: string): Promise<RecipyResponse | undefined> {
        return await responseResolver<RecipyResponse>(this.baseUrl + 'tag/' + tag)
    }

    async getByQuery(query: string): Promise<RecipyResponse | undefined> {
        return await responseResolver<RecipyResponse>(this.baseUrl + 'search?q=' + query)
    }
}

const Recipy = new Api()
export default Recipy;