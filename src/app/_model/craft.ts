import { Category } from "./category";
import { Theme } from "./theme";

export class Craft {
    id!: number;
    name!: string;
    description!: string;
    imageFile!: string;
    category!: Category;
    theme!: Theme;
}