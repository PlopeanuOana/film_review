var users = [
    {
        _id: 1,
        firstName: "Oana",
        lastName: "Plopeanu",
        age: 21,
        preferences: "Action, Cartoons" 
    },
    {
        _id: 2,
        firstName: "Roxana",
        lastName: "Plopeanu",
        age: 24,
        preferences: "Romance, Drama" 
    },
    {
        _id: 3,
        firstName: "Ana",
        lastName: "Dragos",
        age: 21,
        preferences: "Horror, Comedy" 
    }
  ];

  var films = 
    {
        _id: 6,
        name: "Spring Palm",
        gen: "Comedy",
        duration: 85
    };

  var user_review = [
    // {
    //     id_user: 5, 
    //     id_film: 5,
    //     review: "foarte bun" 
    // },
    {
        
        id_user: 2, 
        id_film: 1,
        review: "bun" 
    }
  ];

  
  module.exports =Object.freeze({users, films, user_review});