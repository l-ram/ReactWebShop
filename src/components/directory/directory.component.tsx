import './directory.component.scss';
import DirectoryItem from '../directory-item/directory-item.component';
import { ICategoriesArray } from '../../types/ICategoriesArray';

interface IDirectoryProps {
    categories: ICategoriesArray[];
}

const Directory = (props: IDirectoryProps) => {

    return (
        <div className='directory-container'>
            {props.categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;