import { IsBoolean, IsNotEmpty } from "class-validator";

export class PatchTasks{
    @IsNotEmpty()
    @IsBoolean()
    status : boolean;
}