// import { Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
// import LinkIcon from '@material-ui/icons/Link';
// import React, { useRef, useState } from "react";
// import SearchSuggestion from "./SearchSuggestion";

// const ContactList = () => {
//   const contacts = SearchSuggestion;

//   const inputEl = useRef("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const searchHandler = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     if (searchTerm !== "") {
//       const newContactList = contacts.filter((contact) => {
//         return Object.values(contact)
//           .join(" ")
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase());
//       });
//       setSearchResults(newContactList);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const renderContactList = searchResults.map((contact) => {
//     return (
//       <ListItem button key={contact.id}>
//         <ListItemIcon>
//           <LinkIcon />
//         </ListItemIcon>
//         <ListItemText primary={contact.name} secondary={contact.email} />
//       </ListItem>
//     );
//   });

//   const getSearchTerm = () => {
//     searchHandler(inputEl.current.value);
//   };

//   return (
//     <Container maxWidth="xs">
//       <input
//         ref={inputEl}
//         type="text"
//         placeholder="Search Contacts"
//         value={searchTerm}
//         onChange={getSearchTerm}
//       />
//       <>
//         {renderContactList.length > 0
//           ? <List component="nav" >
//             {renderContactList}
//             <Divider />
//           </List>
//           :
//           <Typography variant="overline" color="error" display="block">Search Result Not Available</Typography>
//         }
//       </>
//     </Container >
//   );
// };

// export default ContactList;


import React from 'react'

const ContactList = () => {
  return (
    <h2>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure perspiciatis non, expedita consequuntur blanditiis exercitationem doloremque, totam fugit, nobis provident porro ipsam pariatur eligendi qui animi! Ex natus necessitatibus maxime expedita, pariatur neque at autem ut cum. Quasi corporis excepturi obcaecati tenetur harum at nisi vitae provident cupiditate qui quidem aut atque, quia a! Corporis veritatis ullam ducimus nulla, possimus ipsam incidunt impedit reiciendis iste rem quibusdam velit modi nihil obcaecati! Quisquam quam doloribus repellendus maiores quibusdam earum veniam laborum, nam distinctio eos vero maxime impedit, provident voluptatibus? Dolorum tempore ab ex fugiat iste voluptates, vel, consequuntur quaerat dolor delectus deleniti quia molestiae est animi sapiente voluptatem voluptatum repudiandae voluptate facilis vitae consectetur perferendis ea? Facilis doloremque commodi dolorum nulla voluptatum quidem sed non numquam iure? Consequatur numquam mollitia nulla, molestias non eos a. Assumenda quo minus ullam aliquam quasi itaque quod esse, harum expedita animi! Accusantium eos porro ut quos rerum voluptates, ipsum natus nisi cum dolores magni voluptate assumenda. Tenetur voluptates, libero ipsum quam omnis expedita impedit est ad ut dolore vitae quod iste facilis officia consequatur ducimus, non illum qui. Nostrum obcaecati ipsa est vitae numquam corporis tempore odit fuga in voluptatum quasi hic quidem nemo, ut minima rerum enim dignissimos alias. Asperiores sequi voluptas nam porro ex, fugiat corporis quam autem accusamus dignissimos, facere repellat velit! Earum, culpa? Reiciendis aliquid dolores ut obcaecati voluptatum aspernatur, mollitia ea repellat. Natus odit cum enim expedita nulla quae ratione recusandae, beatae, officiis neque dolorem magnam ipsa harum, ex tempore asperiores et ad. Dolor quam quo optio animi itaque accusamus consectetur perspiciatis, debitis facere maiores. Quisquam voluptatibus quo enim dolore explicabo nihil veritatis, maiores ipsam repellendus saepe nobis laudantium aperiam laboriosam, recusandae voluptates adipisci. Officia qui, alias adipisci aperiam quidem aliquid voluptates odio vitae voluptate iste impedit sequi est expedita nam animi quisquam, temporibus, a laboriosam ex. Sint nostrum id, deleniti ea dignissimos illum totam laudantium quaerat temporibus animi dolor esse. Saepe itaque aliquid quo. Odio dolore rerum, est distinctio placeat error totam molestiae officia architecto nulla magnam commodi quisquam possimus explicabo blanditiis reiciendis maiores? Sit rem praesentium vel soluta atque aliquid ea alias amet perferendis maiores quaerat mollitia, hic minus ducimus deleniti itaque in, quibusdam laudantium est molestiae, quisquam nemo et! Error at eaque exercitationem sed placeat maxime quisquam nihil possimus itaque odio reprehenderit adipisci ab obcaecati quasi harum facilis, eius dignissimos doloribus officiis amet delectus! Cupiditate natus quaerat vitae corrupti quasi consequuntur fuga laudantium delectus esse, sit culpa odit non cum deserunt est molestias a distinctio ea libero asperiores quis eius nihil excepturi minus! Est, animi consequuntur dignissimos modi quasi vitae expedita facilis quo eligendi rerum sint, ipsum placeat ullam a nostrum laudantium dolor officia provident iusto consequatur voluptate. Ratione vero sapiente culpa, minima beatae inventore? Ex magnam delectus illum reprehenderit exercitationem, possimus eos atque blanditiis saepe molestiae unde earum, fuga adipisci dolorem quae? Ea rem aliquam pariatur qui, optio consequuntur soluta facere odit reprehenderit ut aliquid dolorem dolores quidem itaque, distinctio ullam necessitatibus ex temporibus. Officia, veritatis?
    </h2>
  )
}

export default ContactList
