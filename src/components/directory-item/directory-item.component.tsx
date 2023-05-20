import './directory-item.component.scss'


interface ICategoryItemProps {
    category: {
        id: number;
        title: string;
        imageUrl: string;
    };
}


const DirectoryItem = (props:ICategoryItemProps) => {

const { imageUrl, title} = props.category;

return (

    <div className="directory-item-container">
    <div className="background-image" style={
      {backgroundImage: `url(${imageUrl})`}}>
      </div>
    <div className="body">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>

)

}

export default DirectoryItem;