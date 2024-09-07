import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, isString, IsString, MinLength } from "class-validator";

export class CreateTasks {
    id: number;
    @IsString()
    @MinLength(2)
    title: string;
    @IsNotEmpty()
    description: string|Array<string>;
    @IsNumber()
    @IsNotEmpty()
    priority: number;
    @IsNumber()
    @IsNotEmpty()
    type: number;
    @IsNotEmpty()
    status: string|boolean;
    createdAt: Date;
    updatedAt: Date;
}
