const Book = (props) => {
  const { title, author, image , id /*, getBook */ } = props;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <button onClick={() => getBook(id)}>Get Details</button> */}
      <span className="id"> # {id}</span>
    </article>
  );
};

export default Book;