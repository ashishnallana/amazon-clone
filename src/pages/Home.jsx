import React from "react";
import "./Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/1500x600_Highway-Love_V5._CB603521096_.jpg"
          alt="banner_img"
          className="home_image"
        />

        <div className="home_row">
          <Product
            id="https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=sr_1_1?keywords=the+alchemist&qid=1689000398&sr=8-1"
            title="The Alchemist, 25th Anniversary: A Fable About Following Your Dream"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/518qiLwlQ0L.jpg"
          />
          <Product
            id="https://www.amazon.com/Apple-iPhone-14-128GB-Blue/dp/B0BN733951/ref=sr_1_2?keywords=iphone+14&qid=1689000558&sr=8-2"
            title="Apple iPhone 14, 128GB, Blue - Unlocked (Renewed)"
            price={689.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="https://www.amazon.com/Dell-Inspiron-3511-Touchscreen-i5-1135G7/dp/B0B29C364N/ref=sr_1_2?keywords=dell+inspiron&qid=1689000687&sr=8-2"
            title='Dell Inspiron 15 3000 Series 3511 Laptop, 15.6" FHD Touchscreen, Intel Core i5-1035G1, 32GB DDR4 RAM, 1TB PCIe SSD, SD Card Reader, Webcam, HDMI, Wi-Fi, Windows 11 Home, Black'
            price={629}
            rating={3}
            image="https://m.media-amazon.com/images/I/61KwCmF0bdL.jpg"
          />
          <Product
            id="https://aax-us-iad.amazon.com/x/c/RKbfGzM10p_2-FlcDTLzzxIAAAGJQE1T2QEAAAH2AQBvbm9fdHhuX2JpZDMgICBvbm9fdHhuX2ltcDEgICAvzQv_/https://www.amazon.com/Military-Smartwatch-Bluetooth-Tactical-Waterproof/dp/B0C4P7R6CK/ref=sxin_17_sbv_search_btf?content-id=amzn1.sym.6cfa532e-9c8f-48d2-87a3-a61547a0d356%3Aamzn1.sym.6cfa532e-9c8f-48d2-87a3-a61547a0d356&cv_ct_cx=titan+smart+watch&keywords=titan+smart+watch&pd_rd_i=B0C4P7R6CK&pd_rd_r=d12c2131-6135-4597-9eb4-127fcbf81d96&pd_rd_w=xkg5c&pd_rd_wg=39VSj&pf_rd_p=6cfa532e-9c8f-48d2-87a3-a61547a0d356&pf_rd_r=PN1V5E27GWG3807B957N&qid=1689000956&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-5190daf0-67e3-427c-bea6-c72c1df98776"
            title='Military Smart Watches for Men, 1.85" HD Display 400mAh Rugged Smartwatch with Bluetooth Call Tactical IP68 Waterproof Smart Watch Outdoor Fitness Tracker with Heart Rate Monitor for iOS Android Phone'
            price={54.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61+-gOHIn7L.jpg"
          />
          <Product
            id="https://www.amazon.com/Reebok-Womens-Dynamica-Sneaker-Black/dp/B09LGFT3F7/ref=sr_1_13?keywords=reebok+shoe&qid=1689001104&sr=8-13"
            title="ReebokWomen's Zig Dynamica Sneaker"
            price={73.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/71zoogCdoQL.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="https://www.amazon.com/Samsung-CJ791-Thunderbolt-Curved-Monitor/dp/B07CS3JB5K/ref=sxin_14_recs_zoco_stores_brand_identity_bs?content-id=amzn1.sym.7d2e00dd-9358-4f89-aca0-04685eb73811%3Aamzn1.sym.7d2e00dd-9358-4f89-aca0-04685eb73811&cv_ct_cx=samsung+monitor&keywords=samsung+monitor&pd_rd_i=B07CS3JB5K&pd_rd_r=9e00ac28-e2f3-4a0b-8eb7-f9d2858f1778&pd_rd_w=Q6CB9&pd_rd_wg=OVB20&pf_rd_p=7d2e00dd-9358-4f89-aca0-04685eb73811&pf_rd_r=2RMPNZNJAWGT1QMKX9DF&qid=1689001244&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-3-5f457e4f-4cf5-45bd-948b-58563dcb013a"
            title="SAMSUNG CJ79 Series 34-Inch ViewFinity Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Thunderbolt 3 Daisy Chain, QLED, HDMI, USB Hub, Height Adjustable Stand (LC34J791WTNXZA), White"
            price={538.75}
            rating={4}
            image="https://m.media-amazon.com/images/I/81oADRhNq2L.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
