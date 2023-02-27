import './category-item.component.scss'


interface ICategoryItemProps {
    category: {
        id: number;
        title: string;
        imageUrl: string;
    };
}


const CategoryItem = (props:ICategoryItemProps) => {

const { imageUrl, title} = props.category;

return (

    <div className="category-container">
    <div className="background-image" style={
      {backgroundImage: `url(${imageUrl})`}}>
      </div>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>

)

}

export default CategoryItem