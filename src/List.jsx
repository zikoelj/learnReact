//rendering list in reactJs
import PropTypes from "prop-types";
function List(props){

    const category = props.category;
    const itemList = props.items; //List is a reusable component
    const listItems = itemList.map(item => 
                                        <li key={item.id} >
                                          {item.name}: &nbsp;
                                          <b>{item.calories}</b>
                                        </li>)
    return (<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>
            );
}
List.propTypes = {
    category : PropTypes.string.isRequired,
    items : PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired,
                                               name:PropTypes.string.isRequired,
                                            calories:PropTypes.number.isRequired})), 
}
List.defaultProps = {
    category:"Category",
    items:[]
}
export default List  