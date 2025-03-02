export class CreateUserDto{
        username: string;
        pass: string; 
        names: string;
        lastname: string;
        role: string;
        created_by_id: number;
        updated_by_id?: number;
}