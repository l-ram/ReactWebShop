import './directory.component.scss';
import CategoryItem from '../category-item/category-item.component';
import { ICategoriesArray } from '../../types/ICategoriesArray';

interface IDirectoryProps {
    categories: ICategoriesArray[];
}

const Directory = (props: IDirectoryProps) => {

    return (
        <div className='directory-container'>
            {props.categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;