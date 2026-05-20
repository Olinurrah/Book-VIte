
const Book = ({book}) => {
    const [review] = book;
    return (
        <div>
            <div>
                {/* <img src={review} alt="" /> */}
                <h3>{review}</h3>
            </div>
        </div>
    );
};

export default Book;

// author
// : 
// "F. Scott Fitzgerald"
// bookId
// : 
// 1
// bookName
// : 
// "The Great Gatsby"
// category
// : 
// "Classic"
// image
// : 
// "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
// publisher
// : 
// "Scribner"
// rating
// : 
// 4.5
// review
// : 
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// : 
// (2) ['Fiction', 'Romance']
// totalPages
// : 
// 192
// yearOfPublishing
// : 
// 1925