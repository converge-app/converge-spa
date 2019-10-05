export interface IProject {
    id?: string
    ownerId?: string
    freelancerId?: string
    projectContent: {
        title: string
        description: string
        category: string
        subCategory: string
        amount: number
        files?: string[]
    }
}
