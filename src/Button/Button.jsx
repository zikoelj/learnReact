import styles from './Button.module.css'
function Button(){

return(
/*is the module method
for external method css <button className="button">Click me</button>*/    
<button className={styles.button}>Click me</button>
)
}
export default Button