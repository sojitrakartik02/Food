import style from './Navigation.module.css'
const Navigation =()=>{
return(
  <nav className={`${style.navigation} container`}>
       <div className="logo">
        <img src="/image/logo1.png" alt="jjj" /></div>
            <ul>
                <li href= "#">HOME</li>
                
                <li href= "#">ABOUT</li>
                <li href= "#">CONTACT</li>
            </ul>
            
        </nav>
)
}
export default Navigation;