import { Link } from "react-router-dom";


function Footer(){


return(

<footer

style={{

background:"#0f172a",

color:"white",

padding:"70px 30px",

marginTop:"50px"

}}

>


<div

style={{

display:"flex",

justifyContent:"space-around",

flexWrap:"wrap",

gap:"50px"

}}

>




{/* Brand */}


<div>


<h1

style={{

fontSize:"35px"

}}

>

HustleWear

</h1>


<p

style={{

maxWidth:"300px",

color:"#cbd5e1",

lineHeight:"1.7"

}}

>

Premium street fashion brand.
Designed for modern lifestyle, confidence and performance.

</p>


</div>








{/* Shop */}


<div>


<h2>

Shop

</h2>



<p>
<Link to="/shirts" style={link}>
Shirts
</Link>
</p>


<p>
<Link to="/tshirts" style={link}>
T-Shirts
</Link>
</p>


<p>
<Link to="/jerseys" style={link}>
Jerseys
</Link>
</p>


<p>
<Link to="/pants" style={link}>
Pants
</Link>
</p>


</div>









{/* Support */}


<div>


<h2>

Support

</h2>



<p>

<Link to="/about" style={link}>

About Us

</Link>

</p>



<p>

<Link to="/contact" style={link}>

Contact

</Link>

</p>



<p>

Privacy Policy

</p>


<p>

Shipping Info

</p>


</div>









{/* Social */}


<div>


<h2>

Follow Us

</h2>


<p>

Instagram

</p>


<p>

Facebook

</p>


<p>

Youtube

</p>


</div>





</div>








<hr

style={{

margin:"50px 0",

borderColor:"#334155"

}}

/>





<p

style={{

textAlign:"center",

color:"#94a3b8"

}}

>

© 2026 HustleWear. All Rights Reserved.

</p>



</footer>


)

}



const link={

color:"white",

textDecoration:"none",

transition:"0.3s"

}



export default Footer;