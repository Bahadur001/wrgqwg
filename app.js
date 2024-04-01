let students = [
    {
        id:1,
        Name: "Bahadur" ,
        Surname: "Novruzov",
        Age:21,
        Country:  "Azerbaijan",
        Point: 60
    },
    {
        id:2,
        Name: "Nicat" ,
        Surname: "Memmedov",
        Age:23,
        Country:  "USA",
        Point: 80
    },
    {
        id:3,
        Name: "Rasim" ,
        Surname: "Suleymanov",
        Age:33,
        Country:  "Rusia",
        Point: 70
    },
    {
        id:4,
        Name: "Namiq" ,
        Surname: "Quliyev",
        Age:41,
        Country:  "Turkey",
        Point: 40
    },
    {
        id:5,
        Name: "Gunay" ,
        Surname: "Hesenova",
        Age:26,
        Country:  "Azerbaijan",
        Point: 90
    },
    {
        id:6,
        Name: "Malik" ,
        Surname: "Necefov",
        Age:21,
        Country:  "Turkey",
        Point: 100
    },
 
]
console.log(students);
students.map((a) => {
    console.log(`${a.Name} ${a.Surname} ${a.Age} ${a.Country} ${a.Point}`)
})
let cem = 0;
students.map((student) => {
    cem += student.Point;
    console.log(`${student.Name} ${student.Surname} ${student.Point}` );
});
let average = cem / students.length;
console.log(average);