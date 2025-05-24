const NewsCard = ({ title, description, url }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Leia mais
      </a>
    </div>
  );
};

export default NewsCard;
// This code defines a NewsCard component that displays a news article's title, description, and a link to read more. It uses Tailwind CSS for styling, including background color, padding, shadow, and hover effects on the button.