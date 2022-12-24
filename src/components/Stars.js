import Star from './Star';
function Stars(props){
  
if(props.count < 6 && props.count > 0 && Number(props.count)){
  let starCountArr = [];
 
    for (let i = 0; i < props.count; i++) {
        starCountArr.push('i');
    }

  console.log("starCountArr: ", starCountArr);
  
  const items = starCountArr.map(function(item, index){
    return <li key={`${item}-${index}`}>
      <Star />
    </li>;
}
    );
    return (
        <ul className="list-star">{items}</ul>
      )
    }
    }

    export default Stars;