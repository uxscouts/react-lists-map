import {useState} from 'react';
 
 
 const data = [
    {
        id: '1',
        title: 'Tiramisu',
        description: 'The best Tiramisu in town',
        image: 'https://foodal.com/wp-content/uploads/2022/08/Mini-Tiramisu-Pin.jpg',
        price: '$5.99',
    },
    {
        id: '2',
        title: 'Lemon Ice Cream',
        description: 'Sinfully delicious',
        image: 'https://t4.ftcdn.net/jpg/06/13/86/29/240_F_613862916_beTs3xwixRPxTYY3lTNI8Bdbp3po2kv0.jpg',
        price: '$4.99',
    },
     {
        id: '3',
        title: 'Chocolate Mousse',
        description: 'Excruciatingly divine?',
        image: 'https://www.recipetineats.com/tachyon/2018/09/Chocolate-Mousse_9.jpg',
        price: '7.99',
    },   
 ];

const topDeserts = data.map(desert => {
  return {
    image: desert.image,
    content: `${desert.title} - ${desert.description}`, 
    price: desert.price
  };
});

        /*
        Backticks (``): These are used for Template Literals introduced in ES6. 
        They allow you to create strings that can contain placeholders, 
        rather than concatenating strings with +.
        Dollar Signs (
        ): These are used inside the backticks to embed variables or 
        expressions directly into the string. \${desert.title}`makes it 
        so you don't have to write'+ desert.title +'`.
        Return {...} (Curly Braces): The return { content: ..., price: ... } creates 
        a new JavaScript Object for each item in the map loop. If you 
        used brackets ([]), you would be returning a new Array for every single item. 
        */
function ShowTopDeserts(){
    return(
         <table>
            {topDeserts.map((desert)=>(
                <tr key={desert.id}>
                    <td><img src={desert.image} width="50" /></td>
                    <td>{desert.content}</td>
                    <td>{desert.price}</td>
                </tr>
            ))}
        </table>
    )
}


// -----------------------------------------------------


 const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
} 

 
// -----------------------------------------------------------


// Example of a news article object in React State
const [article, setArticle] = useState({
  id: "1", // Unique identifier for mapping
  title: "AI Breakthrough: New Language Model Announced",
  author: "Jane Doe",
  description: "A major AI research lab unveils their newest language model, promising higher accuracy.",
  urlToImage: "https://example.com/images/ai-breakthrough.jpg",
  publishedAt: "2026-04-10T12:00:00Z",
  content: "Full article content goes here...",
  source: {
    name: "Tech News Daily",
    url: "https://technewsdaily.com"
  }
});


const newsArticles = [
{  
  id: "1", // Unique identifier for mapping
  title: "AI Breakthrough: New Language Model Announced",
  author: "Jane Doe",
  description: "A major AI research lab unveils their newest language model, promising higher accuracy.",
  urlToImage: "https://example.com/images/ai-breakthrough.jpg",
  publishedAt: "2026-04-10T12:00:00Z",
  content: "Full article content goes here...",
  source: {
    name: "Tech News Daily",
    url: "https://technewsdaily.com"
  }
},
{  id: "1", // Unique identifier for mapping
  title: "AI Breakthrough: New Language Model Announced",
  author: "Jane Doe",
  description: "A major AI research lab unveils their newest language model, promising higher accuracy.",
  urlToImage: "https://example.com/images/ai-breakthrough.jpg",
  publishedAt: "2026-04-10T12:00:00Z",
  content: "Full article content goes here...",
  source: {
    name: "Tech News Daily",
    url: "https://technewsdaily.com"
  }},
{  id: "1", // Unique identifier for mapping
  title: "AI Breakthrough: New Language Model Announced",
  author: "Jane Doe",
  description: "A major AI research lab unveils their newest language model, promising higher accuracy.",
  urlToImage: "https://example.com/images/ai-breakthrough.jpg",
  publishedAt: "2026-04-10T12:00:00Z",
  content: "Full article content goes here...",
  source: {
    name: "Tech News Daily",
    url: "https://technewsdaily.com"
  }},
];



 const Lists = () => {
    return (
        <>
            <h3>Lists</h3>
            <p>Ten Examples</p>
            <hr/>
            <p>(1)</p>
            <ShowTopDeserts/>
            <hr/>
            <p>(2)</p>
            <UserList/>
        </>
    )
}

export default Lists;