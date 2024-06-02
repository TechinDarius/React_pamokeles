import PropTypes from 'prop-types'
function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>);

    return (<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);

}

List.propTypes = {
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            calories:PropTypes.number,
    }))
}

List.defaultProps={
    category: "Category",
    items:[],
}
export default List


// function List() {

//     const fruits = [
//         { id: 1, name: "apple", calories: 95 },
//         { id: 2, name: "orange", calories: 45 },
//         { id: 3, name: "banana", calories: 105 },
//         { id: 4, name: "coconut", calories: 159 },
//         { id: 5, name: "pineapple", calories: 37 }];

//     //jei reikia galim sortint prie mapinant masyva
//     //sortinam pagal varda a-z
//     //fruits.sort((a,b)=>a.name.localeCompare(b.name));

//     //    pagal kalorijas nuo min iki max
//     //fruits.sort((a,b)=>a.calories-b.calories);

//     //filtruojam
//     const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  

//     //rodom tik atitinkancius parametrus
//     const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
//         {lowCalFruit.name}: &nbsp;
//         <b>{lowCalFruit.calories}</b> </li>);


//     // const listItems = fruits.map(fruit => <li key={fruit.id}>
//     //     {fruit.name}: &nbsp;
//     //     <b>{fruit.calories}</b>
//     // </li>);

//     return (<ol>{listItems}</ol>);

// }
// export default List


// function List() {

//     const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

//     //jei reikia galim sortint prie mapinant masyva
//     //fruits.sort();

//     const listItems = fruits.map(fruit => <li>{fruit}</li>);

//     return (<ol>{listItems}</ol>);

// }
// export default List