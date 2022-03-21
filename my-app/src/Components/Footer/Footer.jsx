import React from "react";
import './Footer.css';

const Footer = () => {
    return(
    <section class="part-footer">
        <footer class="py-3 my-4 text-center" style={{background: "#edf0f4", color: "black"}}>
            <h4>Subscribe to Our Newsletter </h4>
            <p>Get the latest product updates,company news and special offers delivered right to your inbox.</p>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter you email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary btn btn-dark" type="button" style={{color: "white"}}>SUBSCRIBE</button>
            </div>
                <p class="text-left text-muted">© 2021 Company, Inc</p>
        </footer>
    </section>

    )

}

export default Footer;