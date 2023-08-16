import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <article className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <hgroup className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </hgroup>
    </article>
  );
};

export default CategoryItem;
