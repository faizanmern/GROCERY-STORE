import './CFooter.css'
const CustomFooter = () => {
    return (
        <>
            <div id="footer" >
                <div className="column" align="center">
                    <ul style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "12px" }}><b>Information</b></li></ul>
                    <ul style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a className="button1" href="http://trolley.ae/index.php?route=information/information&amp;information_id=13" align="center" style={{ color: "#fff", fontSize: "10px" }}><span>10% Discount for FAB Card Holders</span></a></li><li align="center" style={{ color: "#fff", fontSize: "10px" }}><a className="button1" href="http://trolley.ae/index.php?route=information/information&amp;information_id=4" align="center" style={{ color: "#fff", fontSize: "10px" }}><span>User Agreement</span></a></li><li align="center" style={{ color: "#fff", fontSize: "10px" }}><a className="button1" href="http://trolley.ae/index.php?route=information/information&amp;information_id=6" align="center" style={{ color: "#fff", fontSize: "10px" }}><span>Delivery Information</span></a></li><li align="center" style={{ color: "#fff", fontSize: "10px" }}><a className="button1" href="http://trolley.ae/index.php?route=information/information&amp;information_id=3" align="center" style={{ color: "#fff", fontSize: "10px" }}><span>Privacy and Security Policy</span></a></li><li align="center" style={{ color: "#fff", fontSize: "10px" }}><a className="button1" href="http://trolley.ae/index.php?route=information/information&amp;information_id=5" align="center" style={{ color: "#fff", fontSize: "10px" }}><span>Refund and Return Policy</span></a></li>    </ul>
                </div>
                <div className="column" align="center">
                    <ul style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "12px" }}><b>Customer Service</b></li></ul>
                    <ul align="center" style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=information/contact" style={{ color: "#fff", fontSize: "10px" }}>Contact Us</a></li>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="index.php?route=information/information&amp;information_id=8" style={{ color: "#fff", fontSize: "10px" }}>FAQ</a></li>

                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=information/sitemap" style={{ color: "#fff", fontSize: "10px" }}>Site Map</a></li>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="index.php?route=information/information&amp;information_id=11" style={{ color: "#fff", fontSize: "10px" }}>Loyalty Program</a></li>
                    </ul>
                </div>
                <div className="column" align="center">
                    <ul style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "12px" }}><b>Extras</b></li></ul>
                    <ul align="center" style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=product/manufacturer" style={{ color: "#fff", fontSize: "10px" }}>Brands</a></li>


                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="/health_and_beauty_offers" style={{ color: "#fff", fontSize: "10px" }}>Top Offers</a></li>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a className="button1" href="http://trolley.ae/index.php?route=information/information&amp;information_id=12" align="center" style={{ color: "#fff", fontSize: "10px" }}><span>Smart Mall</span></a></li>

                        <li><a href="/recipes" title="Recipes" style={{ color: "#fff", fontSize: "10px" }}>Recipes</a></li>



                    </ul>
                </div>
                <div className="column" align="center">
                    <ul style={{ listStyleType: "none" }}>
                        <li align="center" style={{ color: "#fff", fontSize: "12px" }}><b>My Account</b></li></ul>
                    <ul style={{ listStyleType: "none" }}>
                        <li style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=account/account" style={{ color: "#fff", fontSize: "10px" }}>My Account</a></li>
                        <li style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=account/order" style={{ color: "#fff", fontSize: "10px" }}>Order History</a></li>
                        <li align="center" style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=account/wishlist" style={{ color: "#fff", fontSize: "10px" }}>My Favorites List</a></li>
                        <li style={{ color: "#fff", fontSize: "10px" }}><a href="http://trolley.ae/index.php?route=account/newsletter" style={{ color: "#fff", fontSize: "10px" }}>Newsletter</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <div id="powered" style={{color:"#fff"}} >	© Trolley Trading, 2021. All rights reserved. </div>
            </div>
        </>

    )
}
export default CustomFooter;